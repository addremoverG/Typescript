export const successHtml = (name = 'default') => {
  return `
            <!DOCTYPE html>
                  <html>
                  <head>
                      <meta http-equiv="refresh" content="3;url=/" />
                      <style>
                          body { font-family: sans-serif; text-align: center; padding-top: 50px; }
                      </style>
                  </head>
                  <body>
                      <h1>Otrzymano dane od: ${name}</h1>
                      <p>Dziękujemy! Za 3 sekundy zostaniesz przekierowany na stronę główną.</p>
                  </body>
            </html>
          `;
};
