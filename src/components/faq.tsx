"use client";
import ExpandableText from "./ui/dropdown/dropdown";

const items = [
  { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
  { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
  { label: "Option 3", onClick: () => console.log("Option 3 clicked") },
];

const Faq: React.FC = () => {
  return (
    <section className=" relative flex bg-black h-96 z-1 w- justify-center ">
      <h1>Dropdown Example</h1>
      <ExpandableText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper justo eu eros convallis, in gravida elit rutrum. Nullam in tempor urna. Donec tristique vitae risus eget ultricies. Sed dapibus arcu et nunc dictum, vel volutpat purus consequat. Fusce id velit consequat, fringilla arcu sed, euismod nunc." />
    </section>
  );
};

export default Faq;
