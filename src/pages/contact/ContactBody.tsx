const ContactBody = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-16 my-8">
      <div className="flex text-sm flex gap-2">
        <div>
          <i className="fa-solid fa-dot"></i>
        </div>
        <div>NEW BUSINESS INQUIRIES</div>
        <div>04 / 2026</div>
      </div>
      <div>
        <div>
          TAKE YOUR
          <br />
          STORY FURTHER
        </div>
      </div>
      <div>
        BEFORE WE EVEN BEGIN TALKING ABOUT STORY, WE HAVE TO ESTABLISH A FIRM
        GRASP OF WHO YOU ARE AS A BRAND: YOUR AMBITIONS AND EXPECTATIONS.
        TOGETHER
        <br />
        WE'LL ASSESS WHERE YOU ARE, HOW FAR YOU'VE COME, AND WHERE YOU WISH TO
        GO. FEEL FREE TO SCHEDULE A MEETING OR SEND US AN EMAIL.
      </div>
      <div className="flex gap-4 text-md">
        <div className="bg-blue-500 text-white px-4 py-2">COPY EMAIL</div>
        <div>|</div>
        <div className="bg-green-500 text-white px-4 py-2">BOOK A CALL</div>
      </div>
    </div>
  );
};

export default ContactBody;
