export default function CustomButton(content: any) {
  return (
    <button
      className="   bg-brickly100 hover:bg-brickly400/40 hover:scale-[1.02] transition-all text-brickly700
         select-none  rounded-md w-full md:w-auto h-8 px-10  text-sm font-medium
        hover:bg-brickly50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900
       
        focus:outline-none focus-visible:ring focus-visible:ring-brickly100 focus-visible:ring-opacity-75
        // Register all radix states
        group
        radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900
        radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900
        radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
    >
      {content["content"]}
    </button>
  );
}
