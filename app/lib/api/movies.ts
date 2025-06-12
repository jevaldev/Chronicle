// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   movies?: any;
//   error?: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const { query } = req.query;
//   const apiKey = process.env.OMDB_API_KEY;

//   if (!apiKey) {
//     return res.status(500).json({ error: "API key not configurada" });
//   }

//   if (!query) {
//     return res.status(400).json({ error: "Falta el parámetro query" });
//   }

//   try {
//     const response = await fetch(
//       `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
//     );
//     const data = await response.json();

//     if (data.Response === "False") {
//       return res.status(404).json({ error: data.Error });
//     }

//     res.status(200).json({ movies: data.Search });
//   } catch (error) {
//     res.status(500).json({ error: "Error al consultar OMDB" });
//   }
// }
