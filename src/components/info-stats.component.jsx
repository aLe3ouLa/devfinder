const InfoStats = ({ icon: Icon, data }) => {
  return (
    <div className="flex items-center">
      <Icon className="mr-2 text-gray-500 dark:text-gray-400 text-md " />
      <p className="text-gray-500 dark:text-gray-400 text-md">
        {data}
      </p>
    </div>
  );
};

export default InfoStats;
