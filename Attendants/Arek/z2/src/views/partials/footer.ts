export const footer = (sessionColor: string | undefined) => {
  return `<footer>
            <div id="footer">
              <div id="admin">
                <address>
                  Kontakt do administratora strony: <a href="mailto:info@example.com">info@example.com</a></div>
                </address>
              <div id="guests" data-color="blue" style="background-color: ${sessionColor}; cursor: pointer;">Gości: ++ </div>
              </div>
            </div>
          </footer>
          `;
};
