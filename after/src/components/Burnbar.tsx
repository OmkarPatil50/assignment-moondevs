import React, { useState } from "react";

const Burnbar = ({ executeBurn, txProgress }) => {
  const [burnAmount, setBurnAmount] = useState("");
  

  const onChangeBurnAmount = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") setBurnAmount("");
    if (isNaN(parseFloat(e.target.value))) return;
    setBurnAmount(e.target.value);
  };

  return (
    <div className="burn_bar">
      <div className="input_value_box">
        <p className="input_muted">Enter amount to Burn</p>
        <input
          className="input_value"
          type="text"
          value={burnAmount}
          placeholder="0.00"
          onChange={onChangeBurnAmount}
        />
      </div>
      <Button
        variant="outlined"
        onClick={executeBurn}
        startIcon={
          txProgress ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <AppIcon
              url="/icons/fire.svg"
              fill={IconFilter.primary}
              size={1.5}
              margin={0}
            />
          )
        }
      >
        <span>{txButton}</span>
      </Button>
    </div>
  );
};

export default Burnbar;
