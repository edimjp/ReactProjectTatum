// import { motion } from "motion/react";
// import { div } from "motion/react-client";
import { clients } from "../../utils/data";
import Client from "./Client";

const Clients = () => {
  return (
    <div className="flex flex-col gap-25">
      {clients.map((client, index) => {
        return <Client key={index} client={client} index={index} />;
      })}
    </div>
  );
};

export default Clients;
