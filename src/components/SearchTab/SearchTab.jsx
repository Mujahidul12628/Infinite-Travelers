import { Tabs, Tab } from "@nextui-org/react";

const SearchTab = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Tabs variant={"underlined"} aria-label="Tabs variants">
          <Tab title="Hotel">{}</Tab>
          <Tab title="Tours"> hello2</Tab>
          <Tab title="Activity">hello3 </Tab>
          <Tab title="Rental">hello3 </Tab>
          <Tab title="Tour Guid">hello3 </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTab;
