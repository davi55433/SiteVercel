// tava criptografado por isso ta tudo fodido, mas só ler q vc entende
function f() {
  const v = document.getElementById("ra");
  const v2 = v.value.trim();
  if (!/sp$/i.test(v2)) {
    v.value = v2 + "sp";
  }
}
function f2(p) {
  const v3 = document.getElementById(p);
  v3.value = "";
  f3(p);
}
function f3(p2) {
  const v4 = document.getElementById(p2);
  const v5 = document.getElementById("clear-" + p2);
  v5.style.display = v4.value ? "block" : "none";
}
function f4() {
  const v6 = document.getElementById("pwd");
  const v7 = document.getElementById("toggle-pwd");
  const v8 = v6.type === "password";
  v6.type = v8 ? "text" : "password";
  v7.innerHTML = v8 ? "<img src=\"./assets/eye-slash.svg\" alt=\"Ocultar senha\" />" : "<img src=\"./assets/eye.svg\" alt=\"Mostrar senha\" />";
}
let v9 = 0;
function f5(p3) {
  return new Promise(p4 => {
    if (document.getElementById("notification-styles") === null) {
      const v10 = document.createElement("style");
      v10.id = "notification-styles";
      v10.innerHTML = "\n          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');\n          .notification {\n            position: fixed;\n            right: -320px;\n            background-color: #000;\n            color: #fff;\n            padding: 10px;\n            border-radius: 10px;\n            z-index: 1000;\n            width: 320px;\n            transition: right 0.5s ease;\n            font-family: 'Poppins', sans-serif;\n            border: 1px solid rgba(255,255,255,0.5);\n            height: auto;\n          }\n          .notification-content {\n            display: flex;\n            flex-direction: column;\n            gap: 0.5rem;\n          }\n          .notification-content p {\n            margin: 0;\n            padding: 0;\n            font-size: 0.8rem;\n            word-break: break-word;\n          }\n          .progress-bar {\n            margin-top: 8px;\n            height: 5px;\n            border-radius: 5px;\n            width: 100%;\n            overflow: hidden;\n          }\n          .progress-bar div {\n            height: 100%;\n            background: linear-gradient(90deg, orange, #f0f);\n            background-size: 200% auto;\n            animation: progressAnimation 5s linear forwards, gradientAnimation-218135ab 5s ease infinite;\n          }\n          @keyframes progressAnimation {\n            from { width: 100%; }\n            to { width: 0; }\n          }\n          @keyframes gradientAnimation-218135ab {\n            0% { background-position: 0% 50%; }\n            50% { background-position: 100% 50%; }\n            100% { background-position: 0% 50%; }\n          }\n        ";
      document.head.appendChild(v10);
    }
    v9++;
    const v11 = document.createElement("div");
    v11.id = "notification-" + v9;
    v11.className = "notification";
    v11.style.bottom = 20 + (v9 - 1) * 70 + "px";
    v11.innerHTML = "\n        <div class=\"notification-content\">\n          <p>" + p3 + "</p>\n          <div class=\"progress-bar\"><div></div></div>\n        </div>\n      ";
    document.body.appendChild(v11);
    setTimeout(() => {
      v11.style.right = "20px";
    }, 10);
    setTimeout(() => {
      v11.style.right = "-320px";
      setTimeout(() => {
        v11.remove();
        v9--;
        p4();
      }, 500);
    }, 5000);
  });
}
function f6() {
  document.getElementById("donationOverlay").style.display = "none";
}
async function f7(p5) {
  return new Promise(p6 => setTimeout(p6, p5));
}
async function f8(p7, p8, p9) {
  if (p7 === "" || p8 === "") {
    document.getElementById("ra").value = "";
    document.getElementById("pwd").value = "";
    return alert("preeche os dadoskk");
  }
  f5("SE VC PAGOU POR ISSO VC FOI SCAMMADO");
  f5("PEGANDO INFORMACOES...");
  f5("ATENCAO PODE ENTRE " + document.getElementById("max-time").value + " MINUTOS PARA TERMINAR SUAS ATIVIDADES DEVIDO AO TEMPO ESCOLHIDO");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  const vEncodeURIComponent = encodeURIComponent(p7);
  const vEncodeURIComponent2 = encodeURIComponent(p8);
  const v12 = await fetch("/getporra?ra=" + vEncodeURIComponent + "&password=" + vEncodeURIComponent2 + "&porra=" + p9);
  if (!v12.ok) {
    f5("Erro ao entrar na conta :( tente dnv");
    return;
  }
  if (v12 === "codigo_69") {
    f5("CODIGO 69 ATIVADO");
    f5("CALOTEIRO SAFADO PAGA O QUE ME DEVEKKKKKKKK");
    f5("Bloqueado até pagamentoKKKkKKKk");
  }
  const v13 = await v12.json();
  f5("LOGADO NA CONTA, PEGANDO LICOES...");
  if (v13 && v13.x_auth_key && v13.room_code) {
    const v14 = v13.x_auth_key;
    const v15 = v13.room_code;
    let v16 = await fetch("/getlesson_normal_2?x_auth_key=" + v14 + "&room_code=" + v15 + "&porra=" + p9);
    if (!v16.ok) {
      v16 = await fetch("/getlesson_normal?x_auth_key=" + v14 + "&room_code=" + v15 + "&porra=" + p9);
      if (!v16.ok) {
        f5("Erro ao carregar licoes. Verifique sua conexão e tente novamente.");
        return;
      }
    }
    const v17 = await v16.text();
    f5("LICOES CARREGADAS COM SUCESSO!");
    if (v17 === "[]") {
      f5("Nenhuma Licao Encontrada bruh");
    }
    const v18 = JSON.parse(v17);
    for (const v19 of v18) {
      const v20 = v19.title.toUpperCase();
      f5("FAZENDO LIÇÃO " + v19.title);
      console.log(v19.title);
      try {
        await f7(1000);
        const v21 = await fetch("/dolesso?x_auth_key=" + v14 + "&room_code=" + v15 + "&lesson_id=" + v19.id + "&porra=" + p9 + "&timeMin=" + document.getElementById("min-time").value + "&timeMax=" + document.getElementById("max-time").value);
        if (v21.ok) {
          console.log("tuche, atividade " + v19.title + " FEITA!");
        } else {
          console.error("Erro ao fazer a atividade " + v19.title);
          f5("Erro ao fazer a atividade " + v19.title + ". Tente novamente.");
        }
      } catch (_0x212283) {
        console.error("Erro na requisição dolesson:", _0x212283);
        f5("Erro ao fazer a lição. Verifique sua conexão e tente novamente.");
      }
    }
    f5("Verificando se sobrou atividades em 30Segundos...");
    await f7(30000);
    let v22 = await fetch("/getlesson_normal?x_auth_key=" + v14 + "&room_code=" + v15 + "&porra=" + p9);
    if (!v22.ok) {
      v22 = await fetch("/getlesson_normal?x_auth_key=" + v14 + "&room_code=" + v15 + "&porra=" + p9);
      if (!v22.ok) {
        f5("Erro ao carregar licoes. Verifique sua conexão e tente novamente.");
        return;
      }
    }
    const v23 = await v22.text();
    f5("LICOES CARREGADAS COM SUCESSO!");
    if (v23 === "[]") {
      f5("Nenhuma Licao Encontrada bruh");
    }
    const v24 = JSON.parse(v23);
    for (const v25 of v24) {
      const v26 = v25.title.toUpperCase();
      f5("FAZENDO LIÇÃO " + v25.title);
      console.log(v25.title);
      try {
        await f7(1000);
        const v27 = await fetch("/dolesso?x_auth_key=" + v14 + "&room_code=" + v15 + "&lesson_id=" + v25.id + "&porra=" + p9 + "&timeMin=" + document.getElementById("min-time").value + "&timeMax=" + document.getElementById("max-time").value);
        if (v27.ok) {
          console.log("tuche, atividade " + v25.title + " FEITA!");
        } else {
          console.error("Erro ao fazer a atividade " + v25.title);
          f5("Erro ao fazer a atividade " + v25.title + ". Tente novamente.");
        }
      } catch (_0x4b84f9) {
        console.error("Erro na requisição dolesson:", _0x4b84f9);
        f5("Erro ao fazer a lição. Verifique sua conexão e tente novamente.");
      }
    }
  } else {
    console.error("Resposta inválida do servidor");
    f5("Erro ao carregar lições. Verifique sua conexão e tente novamente.");
  }
}
async function f9(p10, p11, p12) {
  if (p10 === "" || p11 === "") {
    document.getElementById("ra").value = "";
    document.getElementById("pwd").value = "";
    return alert("preeche os dadoskk");
  }
  f5("SE VC PAGOU POR ISSO VC FOI SCAMMADO");
  f5("PEGANDO INFORMACOES...");
  f5("ATENCAO PODE ENTRE " + document.getElementById("max-time").value + " MINUTOS PARA TERMINAR SUAS ATIVIDADES DEVIDO AO TEMPO ESCOLHIDO");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  f5("ATENCAO O DORITUS NAO FAZ PROVA");
  const vEncodeURIComponent3 = encodeURIComponent(p10);
  const vEncodeURIComponent4 = encodeURIComponent(p11);
  const v28 = await fetch("/getporra?ra=" + vEncodeURIComponent3 + "&password=" + vEncodeURIComponent4 + "&porra=" + p12);
  if (!v28.ok) {
    f5("Erro ao entrar na conta :( tente dnv");
    return;
  }
  if (v28 === "codigo_69") {
    f5("CODIGO 69 ATIVADO");
    f5("CALOTEIRO SAFADO PAGA O QUE ME DEVEKKKKKKKK");
    f5("Bloqueado até pagamentoKKKkKKKk");
  }
  const v29 = await v28.json();
  f5("LOGADO NA CONTA, PEGANDO LICOES...");
  if (v29 && v29.x_auth_key && v29.room_code) {
    const v30 = v29.x_auth_key;
    const v31 = v29.room_code;
    let v32 = await fetch("/getlesson_expired_2?x_auth_key=" + v30 + "&room_code=" + v31 + "&porra=" + p12);
    if (!v32.ok) {
      v32 = await fetch("/getlesson_expired?x_auth_key=" + v30 + "&room_code=" + v31 + "&porra=" + p12);
      if (!v32.ok) {
        f5("Erro ao carregar licoes. Verifique sua conexão e tente novamente.");
        return;
      }
    }
    const v33 = await v32.text();
    f5("LICOES CARREGADAS COM SUCESSO!");
    if (v33 === "[]") {
      f5("Nenhuma Licao Encontrada bruh");
    }
    const v34 = JSON.parse(v33);
    for (const v35 of v34) {
      const v36 = v35.title.toUpperCase();
      f5("FAZENDO LIÇÃO " + v35.title);
      console.log(v35.title);
      try {
        await f7(1000);
        const v37 = await fetch("/dolesso?x_auth_key=" + v30 + "&room_code=" + v31 + "&lesson_id=" + v35.id + "&porra=" + p12 + "&timeMin=" + document.getElementById("min-time").value + "&timeMax=" + document.getElementById("max-time").value);
        if (v37.ok) {
          console.log("tuche, atividade " + v35.title + " FEITA!");
        } else {
          console.error("Erro ao fazer a atividade " + v35.title);
          f5("Erro ao fazer a atividade " + v35.title + ". Tente novamente.");
        }
      } catch (_0x493055) {
        console.error("Erro na requisição dolesson:", _0x493055);
        f5("Erro ao fazer a lição. Verifique sua conexão e tente novamente.");
      }
    }
    f5("Verificando se sobrou atividades em 30Segundos...");
    await f7(30000);
    let v38 = await fetch("/getlesson_expired?x_auth_key=" + v30 + "&room_code=" + v31 + "&porra=" + p12);
    if (!v38.ok) {
      v38 = await fetch("/getlesson_expired?x_auth_key=" + v30 + "&room_code=" + v31 + "&porra=" + p12);
      if (!v38.ok) {
        f5("Erro ao carregar licoes. Verifique sua conexão e tente novamente.");
        return;
      }
    }
    const v39 = await v38.text();
    f5("LICOES CARREGADAS COM SUCESSO!");
    if (v39 === "[]") {
      f5("Nenhuma Licao Encontrada bruh");
    }																																																																																																																																				                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        	// veritas no topo slc, https://discord.gg/VfrQAYp5qY
    const v40 = JSON.parse(v39);
    for (const v41 of v40) {
      const v42 = v41.title.toUpperCase();
      f5("FAZENDO LIÇÃO " + v41.title);
      console.log(v41.title);
      try {
        await f7(1000);
        const v43 = await fetch("/dolesso?x_auth_key=" + v30 + "&room_code=" + v31 + "&lesson_id=" + v41.id + "&porra=" + p12 + "&timeMin=" + document.getElementById("min-time").value + "&timeMax=" + document.getElementById("max-time").value);
        if (v43.ok) {
          console.log("tuche, atividade " + v41.title + " FEITA!");
        } else {
          console.error("Erro ao fazer a atividade " + v41.title);
          f5("Erro ao fazer a atividade " + v41.title + ". Tente novamente.");
        }
      } catch (_0x380797) {
        console.error("Erro na requisição dolesson:", _0x380797);
        f5("Erro ao fazer a lição. Verifique sua conexão e tente novamente.");
      }
    }
  } else {
    console.error("Resposta inválida do servidor");
    f5("Erro ao carregar lições. Verifique sua conexão e tente novamente.");
  }
}