import '../../assets/css/form.css'

function Form() {

  return (
    <>
      <div class="container-form">
        <div class="form-side">

          <img src="/src/assets/img/navbar/Ai Labs logo.png" alt="AI-Labs"/>

          <form class="form">
            <p class="title">Registro AI-Labs</p>
            <p class="message">Registra tus datos </p>

            <label>
                <input class="input-reg" type="text" placeholder="" required="" />
                <span>Nombres</span>
            </label>

            <label>
                <input class="input-reg" type="text" placeholder="" required="" />
                <span>Apellidos</span>
            </label>
                    
            <label>
                <input class="input-reg" type="email" placeholder="" required="" />
                <span>Email</span>
            </label> 

            <label>
                <input class="input-reg" type="number" placeholder="" required="" />
                <span>No. Celular</span>
            </label> 

            <label>
              <input class="input-reg" type="text" placeholder="" required="" />
              <span>Username</span>
            </label>

            <label>
              <input class="input-reg" type="text" placeholder="" required="" />
              <span>Binance Id</span>
            </label>

            <label>
              <input class="input-reg" type="text" placeholder="" required="" />
              <span>Wallet BEP20</span>
            </label>
                                    
            <label>
                <input class="input-reg" type="password" placeholder="" required="" />
                <span>Contraseña</span>
            </label>
            <label>
                <input class="input-reg" type="password" placeholder="" required="" />
                <span>Confirmar contraseña</span>
            </label>
            <button class="submit">Registrarse</button>
            <p class="signin">Ya tienes cuenta? <a href="#">Iniciar Sesión</a> </p>
        </form>

        </div>
      </div>

    </>
  );
}

export default Form;