import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  buscarUsuario,
  buscarUsuarioPorMail,
  compararPass,
} from "../controllers/usuarioController.js";
import Usuario from "../models/usuario.js";

passport.use(
  new LocalStrategy({ usernameField: "mail" }, async function (
    mail,
    password,
    done
  ) {
    try {
      const usuario = await buscarUsuarioPorMail({ mail });
      if (usuario && mail === usuario.usuario.mail) {
        if (await compararPass(password, usuario.usuario.password)) {
          return done(null, usuario);
        } else {
          return done(null, false, { message: "Credenciales incorrectas" });
        }
      } else {
        return done(null, false, {
          message: "Correo electrónico no encontrado",
        });
      }
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((usuario, done) => {
  done(null, usuario.usuario.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const usuario = await Usuario.findByPk(id);
    done(null, usuario);
  } catch (error) {
    done(error);
  }
});
/**
 * ruta para proteger el acceso a los endpoints que necesiten estar si o si registrados en la app.
 */
export const autenticado = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("no hay usuario registrado");
      console.log(info);
      return res
        .status(401)
        .json({ message: "Por favor, registrese en la plataforma" });
    }
    req.logIn(user, async (err) => {
      if (err) {
        return next(err);
      }
      req.session.usuario = user;
      await req.session.save(() => {
        res.status(200).json({ mensaje: "login exitosos", usuario: user });
      });
    });
  })(req, res, next);
};

export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

/**
 * proteccion de rutas segun tipo de usuario.
 */

export const permisoRestaurant = (req, res, next) => {
  const rol = req.user.rol_usuario;
  if (rol !== "cliente" && rol !== "repartidor") {
    res.status(401).json({
      message: "No tiene permiso para realizar esta operación",
    });
  }
  next();
};

export const permisoRepartidor = (req, res, next) => {
  const rol = req.user.rol_usuario;
  if (rol !== "cliente" && rol !== "restaurante") {
    res.status(401).json({
      message: "No tiene permiso para realizar esta operación",
    });
  }
  next();
};

export const permisoCliente = (req, res, next) => {
  const rol = req.user.rol_usuario;
  if (rol !== "repartidor" && rol !== "restaurante") {
    res.status(401).json({
      message: "No tiene permiso para realizar esta operación",
    });
  }
  next();
};
