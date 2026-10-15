import ContactHeader from "./ContactHeader";
import ContactBody from "./ContactBody";
import ContactFooter from "./ContactFooter";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-16 my-8">
      <ContactHeader />
      <ContactBody />
      <ContactFooter />
    </div>
  );
};

export default Contacts;
