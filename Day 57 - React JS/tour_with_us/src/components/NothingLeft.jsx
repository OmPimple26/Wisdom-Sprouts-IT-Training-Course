const NothingLeft = ({ setState, destinations }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 20px",
        background: "palevioletred",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          padding: "50px 30px",
          textAlign: "center",
          borderRadius: "24px",
          background:
            "linear-gradient(145deg, rgba(30,30,30,0.95), rgba(18,18,18,0.95))",
          border: "1px solid rgba(249,115,22,0.18)",
          boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "110px",
            height: "110px",
            margin: "0 auto 25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))",
            border: "1px solid rgba(249,115,22,0.25)",
            fontSize: "55px",
          }}
        >
          🎉
        </div>

        {/* Heading */}
        <h4
          style={{
            fontSize: "clamp(26px, 5vw, 34px)",
            fontWeight: "800",
            margin: "0 0 15px",
            background:
              "linear-gradient(90deg, #fb923c, #f97316, #ea580c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nothing Left!
        </h4>

        {/* Description */}
        <p
          style={{
            fontSize: "15px",
            color: "#a1a1aa",
            maxWidth: "370px",
            lineHeight: "1.8",
            margin: "0 auto 30px",
          }}
        >
          You've explored everything available! There is nothing more to
          discover right now. Why not start exploring again?
        </p>

        {/* Reload Button */}
        <button
          onClick={() => setState(destinations)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "13px 30px",
            background:
              "linear-gradient(135deg, #fb923c, #f97316)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 5px 20px rgba(249,115,22,0.25)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(249,115,22,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 5px 20px rgba(249,115,22,0.25)";
          }}
        >
          <span style={{ fontSize: "18px" }}>↻</span>
          Explore Again
        </button>

        {/* Footer Text */}
        <p
          style={{
            margin: "25px 0 0",
            fontSize: "12px",
            color: "#52525b",
            letterSpacing: "0.5px",
          }}
        >
          MORE TO EXPLORE · KEEP DISCOVERING
        </p>
      </div>
    </div>
  );
};

export default NothingLeft;
