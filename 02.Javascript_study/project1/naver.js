$("#btn-join").click(function () {
  const id = $("#inputID").val();
  const password1 = $("#inputPassword1").val();
  const password2 = $("#inputPassword2").val();
  const Username = $("#inputUsername").val();
  const birth1 = $("#inputbirth1").val();
  const birth2 = $("#inputbirth2").val();
  const birth3 = $("#inputbirth3").val();
  const gender = $("#gender").val();
  const email = $("#inputUseremail").val();
  const tel1 = $("#inputUsertel1").val();
  const tel2 = $("#inputUsertel2").val();

  if (!id) {
    alert("아이디를 입력해주세요.");
    return;
  }

  if (!password1) {
    alert("비밀번호를 입력해주세요.");
    return;
  } else {
    if (!pwdCheck(password1)) {
      alert("특수문자 문자 숫자 포함 형태의 8~15자리 이내로 입력해주세요.");
      return;
    }
  }

  if (!password2) {
    alert("비밀번호를 입력해주세요");
    return;
  } else {
    if (!pwdCheck(password2)) {
      alert("특수문자 문자 숫자 포함 형태의 8~15자리 이내로 입력해주세요.");
      return;
    }
  }

  if (!Username) {
    alert("이름을 입력해주세요.");
    return;
  }

  if (!birth1) {
    alert("년도를 입력해주세요.");
    return;
  }

  if (!birth2) {
    alert("월을 선택해주세요.");
    return;
  }

  if (!birth3) {
    alert("일을 선택해주세요.");
    return;
  }

  if (!gender) {
    alert("성별을 선택해주세요.");
    return;
  }

  if (!email) {
    alert("이메일을 입력해주세요.");
    return;
  } else {
    if (!emailCheck(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }
  }

  if (!tel1) {
    alert("국번을 선택해주세요.");
    return;
  }

  if (!tel2) {
    alert("전화번호를 입력해주세요.");
    return;
  } else {
    if (!telCheck(tel2)) {
      alert("전화번호 형식이 올바르지 않습니다.");
      return;
    }
  }

  alert("회원가입이 완료 되었습니다!");
});

function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd); //맞으면 true, 틀리면 false를 준다.
}

function emailCheck(email) {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email); //맞으면 true, 틀리면 false를 준다.
}

function telCheck(tel) {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
}
