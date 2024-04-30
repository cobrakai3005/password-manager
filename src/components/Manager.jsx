import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = JSON.parse(localStorage.getItem("passwords"));
    if (passwords) {
      setPasswordArray([...passwords]);
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eye-not-show.webp")) {
      ref.current.src = "icons/eye-show.jpg";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eye-not-show.webp";
      passwordRef.current.type = "password";
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const savePassword = () => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );

    setForm({
      site: "",
      username: "",
      password: "",
    });
    toast("Password saved");
  };
  const deletePassword = (id) => {
    console.log("delete", id);
    const newPasswords = passwordArray.filter((pass) => pass.id !== id);

    setPasswordArray([...newPasswords]);
    localStorage.setItem("passwords", JSON.stringify(newPasswords));
    toast("Password Deleted");
  };
  const editPassword = (id) => {
    const findPassword = passwordArray.filter((pass) => pass.id === id);
    setForm(findPassword[0]);
    const rest = passwordArray.filter((pass) => pass.id !== id);
    setPasswordArray(rest);
    localStorage.setItem("passwords", JSON.stringify(rest));
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard");
  };

  return (
    <>
      <ToastContainer />
      {/* Same as */}

      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className="md:my-container sm:w-full">
        <h1 className="text-4xl text-center fon-bold">
          <span className="text-purple-700">&lt;</span>
          <span>Password</span>
          <span className="text-purple-700">manager&gt;</span>
        </h1>
        <p className="text-violet-800 text-center text-lg">
          Your password manager
        </p>
        <div className="text-white flex gap-4 flex-col items-center p-4">
          <input
            type="text"
            value={form.site}
            name="site"
            onChange={handleChange}
            placeholder="Enter url."
            className="rounded-lg border w-full text-black py-1 p-4 border-violet-400"
          />
          <div className="flex flex-col sm:flex-row gap-8 justify-between  w-full">
            <input
              type="text"
              value={form.username}
              name="username"
              onChange={handleChange}
              placeholder="Enter website username"
              className="rounded-lg border text-black py-1 p-4 border-violet-400"
            />
            <div className="relative flex items-center">
              <input
                type="password"
                value={form.password}
                name="password"
                onChange={handleChange}
                ref={passwordRef}
                placeholder="Enter password"
                className="rounded-lg border text-black py-1 p-4 border-violet-400"
              />
              <span
                className="absolute right-1 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="w-8"
                  src={"icons/eye-show.jpg"}
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            className="flex justify-center gap-2 items-center rounded-full px-4  py-2 bg-violet-600 w-fit hover:bg-violet-300"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div className="passwords ">
          <h2 className="text-center font-bold text-2xl py-4">
            Your Passwords
          </h2>
          {passwordArray?.length === 0 && <div>No passwords to show</div>}

          {passwordArray?.length !== 0 && (
            <table className="table-auto w-full rounded text-lg overflow-hidden">
              <thead className="bg-violet-400">
                <tr>
                  <th className="py-3">Site</th>
                  <th className="py-3">Username</th>
                  <th className="py-3">password</th>
                  <th className="py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-violet-100">
                {passwordArray?.map((pass, index) => (
                  <tr key={index}>
                    <td className="text-center py-3 border border-white  gap-2">
                      <div className="flex items-center justify-center">
                        <a href={pass.site} target="_blank">
                          {pass.site}
                        </a>
                        <div
                          onClick={() => copyText(pass.site)}
                          className="lordIconCopy pl-4 cursor-pointer text-center"
                        >
                          <lord-icon
                            style={{ width: "20px", paddingTop: "3px" }}
                            className="cursor-pointer w-5"
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3  border border-white ">
                      <div className="flex items-center justify-center">
                        <span>{pass.username}</span>
                        <div
                          onClick={() => copyText(pass.username)}
                          className="lordIconCopy pl-4 cursor-pointer text-center"
                        >
                          <lord-icon
                            style={{ width: "20px", paddingTop: "3px" }}
                            className="cursor-pointer w-5"
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3  border border-white ">
                      <div className="flex items-center justify-center">
                        <span>{pass.password}</span>
                        <div
                          onClick={() => copyText(pass.password)}
                          className="lordIconCopy pl-4 cursor-pointer text-center"
                        >
                          <lord-icon
                            style={{ width: "20px", paddingTop: "3px" }}
                            className="cursor-pointer w-5"
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3  border border-white ">
                      <div className="flex gap-3 items-center justify-center">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => editPassword(pass.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/ygnmvgzy.json"
                            trigger="hover"
                            style={{ width: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => deletePassword(pass.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px" }}
                          ></lord-icon>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
