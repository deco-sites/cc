import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  /**
   * @format textarea
   * @description The initial list of items.
   * @default []
   */
  items?: string[];

  /**
   * @format textarea
   * @description The new item to be added to the list.
   * @default ""
   */
  newItem?: string;
}

export default function Section({ items = [], newItem = "" }: Props) {
  const addLink = usePartialSection({ props: { items } });

  return (
    <div class="container py-10 flex flex-col items-center justify-center gap-4">
      <ul class="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div class="flex gap-2">
        <input
          type="text"
          id="newItem"
          class="input input-bordered"
          value={newItem}
        />
        <button
          hx-get={addLink["f-partial"]}
          hx-target="#newItem"
          hx-swap="afterend"
          hx-include="[name='newItem']"
          class="btn btn-outline"
        >
          Add item
        </button>
      </div>
    </div>
  );
}