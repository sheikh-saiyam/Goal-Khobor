const DashboardPageHeader = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="mb-4 ">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          {Icon && <Icon className="text-3xl text-gray-900" />}
          {title}
        </h2>
        <p className="text-gray-800 text-xl mt-1 ml-[2px] font-medium whitespace-pre-line">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default DashboardPageHeader;
