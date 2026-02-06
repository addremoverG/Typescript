export const stylesPage = () => {
    return `
        <div class="flex flex-col styles">
            <h2>Zmień kolor tła</h2>
            <form id="colorForm">
                <div>
                    <input type="color" id="background" name="background" value="#ffffff" />
                    <label for="background">Wybierz kolor</label>
                </div>
                <button type="submit">Zmień tło</button>
            </form>
        </div>
        <script src="post.js" defer></script>
  `;
};
