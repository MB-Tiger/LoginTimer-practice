import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const LoginModal = ({ open, setOpen }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accessCode, setAccessCode] = useState({});
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isAccessPage, setIsAccessPage] = useState(false);
  const [isFailedPage, setIsFailedPage] = useState(false);
  // const [timerMinutes, setTimerMinutes] = useState(0);
  // const [timerSeconds, setTimerSeconds] = useState(10);
  const [, setForceUpdate] = useState(Date.now());
  const [, updateState] = useState();

  const showTimer = ``

  const forceUpdate = useCallback(() => updateState({}), []);

  const timerRef = useRef({
    timerMinutes: 3,
    timerSeconds: 0,
  });

  const showTimerRef = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  // console.log(accessCode);
  // console.log(phoneNumber);
  // console.log(accessCode);
  // console.log(isLoginPage);
  // console.log(isAccessPage);
  // console.log(isFailedPage);
  // console.log(timerMinutes);
  // console.log(timerSeconds);
  console.log(timerRef.current.timerMinutes);
  console.log(timerRef.current.timerSeconds);
  console.log(showTimerRef);
  console.log(showTimer);

  useEffect(() => {
    // const showTimer = `${
    //   timerRef.current.timerMinutes < 10
    //     ? `0${timerRef.current.timerMinutes}`
    //     : timerRef.current.timerMinutes
    // } : ${
    //   timerRef.current.timerSeconds < 10
    //     ? `0${timerRef.current.timerSeconds}`
    //     : timerRef.current.timerSeconds
    // }`;
    if (isAccessPage) startTimer();
  }, []);

  const startTimer = () => {
    let interval = setInterval(() => {
      if (timerRef.current.timerSeconds === 0) {
        if (timerRef.current.timerMinutes !== 0) {
          timerRef.current.timerSeconds = 59;
          timerRef.current.timerMinutes = timerRef.current.timerMinutes - 1;
        } else {
          setIsLoginPage(false);
          setIsAccessPage(false);
          setIsFailedPage(true);
          timerRef.current.timerSeconds = 0;
          timerRef.current.timerMinutes = 3;
          return clearInterval(interval);
        }
      } else {
        timerRef.current.timerSeconds = timerRef.current.timerSeconds - 1;
      }

      showTimerRef.current.innerHTML = `${
        timerRef.current.timerMinutes < 10
          ? `0${timerRef.current.timerMinutes}`
          : timerRef.current.timerMinutes
      } : ${
        timerRef.current.timerSeconds < 10
          ? `0${timerRef.current.timerSeconds}`
          : timerRef.current.timerSeconds
      }`;
      // console.log("This will run every second!");
    }, 1000);
    return () => clearInterval(interval);
  };
  // console.log(Math.random())

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          borderRadius: "4px",
        }}
      >
        {isLoginPage ? (
          <>
            <Typography variant="h6">Login</Typography>
            <TextField
              id="outlined-password-input"
              label="Phone number"
              type="tel"
              autoComplete="current-password"
              sx={{ width: "100%", mt: "15px" }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ width: "100%", mt: "15px" }}
              onClick={() => {
                setIsLoginPage(false);
                setIsAccessPage(true);
                startTimer();
              }}
            >
              Sumbit
            </Button>
          </>
        ) : null}
        {isAccessPage ? (
          <>
            <Typography variant="h6" sx={{ marginBottom: "12px" }}>
              Access code
            </Typography>
            <input
              type="number"
              value={accessCode.num1}
              onChange={(e) => {
                if (e.target.value.length === 1) {
                  setAccessCode({
                    ...accessCode,
                    num1: Number(e.target.value),
                  });
                  input2.current.focus();
                }
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
              style={{
                width: "22%",
                height: "30px",
                marginRight: "4px",
              }}
            />
            <input
              type="number"
              ref={input2}
              value={accessCode.num2}
              onChange={(e) => {
                if (e.target.value.length === 1) {
                  setAccessCode({
                    ...accessCode,
                    num2: Number(e.target.value),
                  });
                  input3.current.focus();
                }
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
              style={{
                width: "22%",
                height: "30px",
                marginRight: "4px",
              }}
            />
            <input
              type="number"
              ref={input3}
              value={accessCode.num3}
              onChange={(e) => {
                if (e.target.value.length === 1) {
                  setAccessCode({
                    ...accessCode,
                    num3: Number(e.target.value),
                  });
                  input4.current.focus();
                }
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
              style={{
                width: "22%",
                height: "30px",
                marginRight: "4px",
              }}
            />
            <input
              type="number"
              ref={input4}
              value={accessCode.num4}
              onChange={(e) => {
                setAccessCode({
                  ...accessCode,
                  num4: Number(e.target.value),
                });
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
              style={{
                height: "30px",
                width: "22%",
              }}
            />
            <p
              style={{
                textAlign: "center",
                marginBottom: "0px",
                marginTop: "10px",
              }}
              ref={showTimerRef}
            >
              {timerRef.current.timerMinutes === 3 ? "03 : 00" : null}
            </p>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "100%", mt: "15px" }}
              onClick={() => {
                setIsAccessPage(false);
                setOpen(false);
                alert("successfully loged in");
              }}
            >
              Sumbit
            </Button>
          </>
        ) : null}
        {isFailedPage ? (
          <>
            <Typography variant="h6" mb={"12px"}>
              Time's up
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "100%", mt: "15px" }}
              onClick={() => {
                setIsFailedPage(false);
                setIsAccessPage(false);
                setIsLoginPage(true);
              }}
            >
              Go back to login page
            </Button>
          </>
        ) : null}
      </Box>
    </Modal>
  );
};

export default memo(LoginModal);
