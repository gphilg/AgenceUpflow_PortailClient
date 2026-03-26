export default function handler(req, res) {
      res.setHeader('Cache-Control', 'no-store');
        res.json({
            baseUrl:      process.env.BASEROW_URL,
                masterToken:  process.env.BASEROW_MASTER_TOKEN,
                    garagesTable: process.env.BASEROW_GARAGES_TABLE_ID,
                      });
                      }
}