import Switch from "react-switch";

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const App = ({ checked, setChecked }: Props) => {
  return (
    <Switch
      onChange={() => setChecked(!checked)}
      checked={checked}
      id="normal-switch"
      uncheckedIcon={false}
      checkedIcon={false}
      // offColor={"#8BB7F0"}
      // onColor={"#8BB7F0"}
      handleDiameter={21}
      height={26}
      width={50}
    />
  );
};

export default App;
