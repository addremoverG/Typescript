export const loginContent = () => {
  return `
    <h1>Logowanie</h1>
    <form action="/z1/login" method="POST" style="max-width: 400px;">
      <div style="margin-bottom: 1rem;">
        <label for="username" style="display:block; margin-bottom: 4px; font-weight: bold;">Nazwa użytkownika:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          style="width:100%; padding:8px; font-size:1rem; border:1px solid #ccc; box-sizing:border-box;"
        >
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="password" style="display:block; margin-bottom: 4px; font-weight: bold;">Hasło:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          style="width:100%; padding:8px; font-size:1rem; border:1px solid #ccc; box-sizing:border-box;"
        >
      </div>
      <button
        type="submit"
        style="padding:10px 24px; background-color:#333; color:white; border:none; font-size:1rem; cursor:pointer;"
      >
        Zaloguj
      </button>
    </form>
  `;
};
