import Button from "@/components/Button";
import { ModalAddFormProps } from "@/utils/Types";

const ModalAddForm = ({ isOpen, onClose, onAddRecord }: ModalAddFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Access the form element
    const form = e.currentTarget;

    // Safely get the form fields
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const url = (form.elements.namedItem("url") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const formData = {
      username,
      url,
      password,
    };
    onAddRecord(formData);
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Add New Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              username:
              <input type="text" name="username"></input>
            </label>
          </div>
          <div>
            <label>
              url:
              <input type="text" name="url" />
            </label>
          </div>
          <div>
            <label>
              password:
              <input type="text" name="password" />
            </label>
          </div>
          <Button type={"submit"}>submit</Button>
        </form>
      </div>
    </div>
  );
};

//some css for modal here
const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  width: "300px",
};

export default ModalAddForm;
