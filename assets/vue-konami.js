const u = {
  mounted(o, e) {
    let t = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "B", "A"].join("-").toLowerCase(), i = 3e3, a = null;
    typeof e.value == "function" ? a = e.value : typeof e.value == "object" && (e.value.chain && (t = e.value.chain.join("-").toLowerCase()), e.value.timeout && (i = e.value.timeout), e.value.callback && (a = e.value.callback)), o._konami = {
      chain: t,
      value: [],
      timeout: i,
      keydownHandler(n) {
        o._konami && (o._konami.value.push(n.key.toLowerCase()), o._konami.value.join("-").includes(o._konami.chain) && (a == null || a(n), o._konami.value = []), clearTimeout(o._konami.timeoutRef), o._konami.timeoutRef = window.setTimeout(() => {
          o._konami && (o._konami.value = []);
        }, o._konami.timeout));
      }
    }, window.addEventListener("keydown", o._konami.keydownHandler);
  },
  unmounted(o) {
    o._konami && (clearTimeout(o._konami.timeoutRef), window.removeEventListener("keydown", o._konami.keydownHandler), delete o._konami);
  }
};
export {
  u as vKonami
};
