var obj = {
  name: "Abhi",
  logDetail: function () {
    setTimeout(function () {
      console.log(this);
    });
  },
};
obj.logDetail();
