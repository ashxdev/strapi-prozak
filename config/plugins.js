module.exports = {
  upload: {
    enabled: true,
    breakpoints: {
      xlarge: 1920,
      large: 1000,
      medium: 750,
      small: 500,
      xsmall: 64,
    },
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "storage.prozak.info",
        publicFiles: true,
        uniform: true,
        serviceAccount: {
          type: "service_account",
          project_id: "prozak-308",
          private_key_id: "5628b379e776935ad02a651d04d4f871376d0dca",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDcqNzOX7kcuhrV\noylL1AC5LGSs6CNM41R7QyKHwbzHnRiz0YO0jNRdFNIXKDYH7ZcZAC2DwfP/l1Ga\ntIABzwSpQGToMBqfw7A6omDe7SbW0eTF20+FENX3g377ZNSBHLw+47jnKoDrOb86\n+7Mtxh3sutqkkkXWH65mIcc9BslrflYaDlVp1INw02QZcckdFCNPDEg9Q8pPEmxo\n080eF4cy+/S/HsVSv99kcPJruxGm6uPk/gFc3gwD6dAtlCqfjTWauZRTTk8qmgFd\nW9zeHPiVymvY9aiIRf9tWROok3aso6NCu9sygbIlblp64D3lMfL4F4YZ9uSqlans\nhSAZ+kO1AgMBAAECggEANm9j9Xdw27DfoNd8/wtgWE4m0e78kmG8fCIOOS5mq1nK\nd8XWd2qMkx/pSjQtzBvlPBIqqEfnMST7yS4BLDENZdGQcyU21DX62iQnwKcBf1pN\nVTAquFl0Z3ilkVAJCobzu5IDEegO4Ligv+TLCZ5H0JgyCwpYtx+eruxjUd9EPkN5\npsb4SkT67wF3yj7QqzvFXpdQsWeHsRPLSJkCIwR6dabh1KX135+aHOgoSPGzeq59\nwk0V/AkLERh1C81X3XutrlGgf0ENtXGfTIoHMHfICiLDJSy7ag9KNaT81UhfhZfR\nMMOE5tARsnIrHo5rs/llaow5rPYRhn2+JHpvtLb0kQKBgQDuh9JDSeFxFfAe+2CB\nxEqQE4p2Na3A1M3PMnQ9Uj8Rexkb6QR3h3VV6dYc6CID3cGP3J9LOZc/MrdkLrjS\nJscBxPCjb6S6CFWkMsFo+4V/h5g6hACrk6xYKc5m3nG5hv9qES593NALCalngoVZ\nI3F+keBZSeF74fAoLe176ANSLQKBgQDs0fs6gZhOgGiW7fgmsB05y4I2N5+lmfnv\nI/QVR0mUeWgfweTGoboHsYeNhagS5vAs7u9KEzxtUZame6wDsKsbhYxIbkZHWyuI\nMYKB+EDeDjD4EX9GZeAGPRYMWlKvgaIOu5d86zWNQkO1g4+kJ6K2ORwGEkhfPBsC\ns/NTnMOUqQKBgH8zlRBnJL8OqOeMvFFXYT/l+8/AHnGXyk01JcHRy2pCEAjPQZ+Q\ncCUptxHhRMp1BpT2XUhbZOnB3QSi2dLP9Q5ffMhbcCf469rNalDW2MFCiQ6jeEwH\nS0AUw0oeU91RPYHNudJK3/MS6vEVLJF1kj+iAVb8TC+pNE3o+B08hBDdAoGBAJgw\nCQb8KWipVI1JuGMEYoO1qKQ28r11SgzISh8yhLKJosRl0iNj4yz2hWoJLo2XI1l8\n4wHzgq2t9OZgK5bjfdJd7FzPoRJSIJORXZEwfF83N3jzpZsT9PeNYhHmKaTn5cEa\nBKwea3ev0dtgBHs1jXcVFFFChofNFH6ULhbZc0ahAoGAYGBLOsDvhlJuSIxgz17P\nj4kwjaLxtiCsZXzeDSQK3O71Viwtibb4crQMbJVft61qevml5qiC3J3aOjE9JWz9\n2ATIr6QlW82AAXykWTe1S105Li46A3+EYpm7lL01WW/mbktp1/wvEePkq6EFHt9i\nSSK5PKS13tK0WFTsnPSODJs=\n-----END PRIVATE KEY-----\n",
          client_email: "prozak-info@prozak-308.iam.gserviceaccount.com",
          client_id: "106515779174199265568",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/prozak-info%40prozak-308.iam.gserviceaccount.com",
        },
        baseUrl: "https://storage.googleapis.com/storage.prozak.info",
        basePath: "",
      },
    },
  },
};
