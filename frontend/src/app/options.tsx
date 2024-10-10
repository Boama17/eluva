import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Toggle from "./toggle.tsx";

export default function Options() {
  return (
    <Popover>
      <PopoverButton className="block text-base font-semibold text-green-600 focus:outline-none data-[active]:text-gray-400 data-[hover]:text-gray-400 data-[focus]:outline-1 data-[focus]:outline-green-600">
        Solutions
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="divide-y divide-white/5 rounded-xl mt-4 backdrop-blur-3xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <div className="p-3">
          <a
            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
            href="#"
          >
            <p className="font-semibold text-green-600">Insights</p>
            <p className="text-black">Measure actions your users take</p>
          </a>
          <a
            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
            href="#"
          >
            <p className="font-semibold text-green-600 mb-5">Automations</p>
            <Toggle />
          </a>
          <a
            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
            href="#"
          >
            <p className="font-semibold text-green-600">Reports</p>
            <p className="text-black">Keep track of your growth</p>
          </a>
        </div>
        <div className="p-3">
          <a
            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
            href="#"
          >
            <p className="font-semibold text-green-600">Documentation</p>
            <p className="text-black">Start integrating products and tools</p>
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
