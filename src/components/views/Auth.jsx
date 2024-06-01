import '../../assets/css/auth.css'

function Auth() {

  return (
    <>
      <div class="container-auth">

        <div class="form-side">

          <img src="/src/assets/img/navbar/Ai Labs logo.png" alt="AI-Labs"/>

          <form class="form">
            <span class="input-span">
            <label for="email" class="label">Email</label>
            <input type="email" name="email" id="email" /></span>
            <span class="input-span">
            <label for="password" class="label">Contraseña</label>
            <input type="password" name="password" id="password" /></span>
            <input class="submit" type="submit" value="Iniciar Sesión" />
            <span class="span"><a href="#">Olvidaste tu contraseña?</a></span>
            <span class="span"><a href="#">Términos, condiciones y política de datos</a></span>
          </form>

        </div>
        <div class="image"></div>
      </div>

    </>
  );
}

export default Auth;