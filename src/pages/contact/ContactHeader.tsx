const ContactHeader = () => {
  return (
    <div className="flex gap-16 justify-end mt-8 mr-8 mb-4">
      <div className="text-sm flex gap-2">
        <div>Location:</div>
        <div className="text-gray-300">
          <div className="w-fit bg-neutral-400">Subotica 24000</div>
          <div className="w-fit bg-neutral-400">Radloti Miklosa 22</div>
          <div className="w-fit bg-neutral-400">Serbia</div>
          <div className="w-fit bg-neutral-400">Est. 2016</div>
        </div>
      </div>

      <div className="text-sm flex gap-2">
        <div>Contact:</div>
        <div className="text-gray-500">
          <div className="underline">hello@fiftyseven.co</div>
          <div className="">We are GMT +2</div>
          <div className="">MON - to - FRI</div>
        </div>
      </div>

      <div className="text-sm flex gap-2">
        <div>Follow:</div>
        <div className="text-gray-500">
          <div className="underline">X (Twitter)</div>
          <div className="underline">Dribbble</div>
          <div className="underline">LinkedIn</div>
          <div className="underline">Instagram</div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
