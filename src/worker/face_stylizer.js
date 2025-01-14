self.onmessage((e) => {
  console.log(e, "worker");

  self.postMessage({ recieve: "test" });
});
