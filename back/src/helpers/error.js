/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */

/**
 * manejador de errores para redireccionar o para devolver un error
 */
// ❌ - No realizado
export const handleError = (req, res) => {
  switch (res.statusCode) {
    // case 200:
    //   return res.status(200).json({
    //     status: "success",
    //     message: "Solicitud exitosa",
    //   });
    case 201:
      return res.status(201).json({
        status: "success",
        message: "Recurso creado exitosamente",
      });
    case 204:
      return res.status(204).json(); // No content, no need for a message
    case 400:
      return res.status(400).json({
        status: "error",
        message: "Solicitud inválida",
      });
    case 401:
      return res.status(401).json({
        status: "error",
        message: "No autorizado",
      });
    case 403:
      return res.status(403).json({
        status: "error",
        message: "Acceso prohibido",
      });
    case 404:
      return res.status(404).json({
        status: "error",
        message: "Recurso no encontrado",
      });
    case 409:
      return res.status(409).json({
        status: "error",
        message: "Conflicto en la solicitud",
      });
    case 500:
      return res.status(500).json({
        status: "error",
        message: "Error interno del servidor",
      });
    default:
      return res.status(500).json({
        status: "error",
        message: "Error desconocido",
      });
  }
};
