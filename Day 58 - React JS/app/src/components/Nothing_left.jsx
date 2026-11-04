const EmptyState = ({ onload }) => {
  return (
    <div
      style={{
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "75px",
          animation: "bounce 1.5s infinite ease-in-out",
        }}
      >
        🍔
      </div>

      <h2
        style={{
          color: "#222",
          fontSize: "25px",
          margin: "20px 0 10px",
        }}
      >
        Oops! Nothing Left
      </h2>

      <p
        style={{
          maxWidth: "350px",
          color: "#888",
          fontSize: "14px",
          lineHeight: "1.7",
        }}
      >
        Looks like all the delicious food is gone! Don't worry, let's refresh
        and find something tasty.
      </p>

      <button
        onClick={onload}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px",
          background: "#ff5722",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ fontSize: "20px" }}>↻</span>
        Reload Menu
      </button>

      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0) rotate(-5deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default EmptyState;
