import { ShowWhenTrue } from "../conditionals";
import { SpinnerIcon } from "../icons";

export default function CustomButton({
  content,
  loading,
  link,
}: {
  content: string;
  loading?: boolean;
  link?: string;
  copia?: boolean;
}) {
  const handleClick = async () => {};
  return (
    <a href={link} target="_blank">
      <button
        className=" flex gap-3 items-center justify-center bg-brickly100 hover:bg-brickly400/40 hover:scale-[1.02] transition-all text-brickly700
         select-none  rounded-md w-full md:w-auto  py-2 px-3  text-base font-medium
        hover:bg-brickly50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900
       
        focus:outline-none focus-visible:ring focus-visible:ring-brickly100 focus-visible:ring-opacity-75
        // Register all radix states
        group
        radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900
        radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900
        radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
      >
        {content}
        <ShowWhenTrue when={loading ?? false}>
          <SpinnerIcon className=" animate-spin w-3" />
        </ShowWhenTrue>
      </button>
    </a>
  );
}
