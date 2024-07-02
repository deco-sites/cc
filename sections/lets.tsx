import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  /**
   * @format rich-text
   * @description The title of the list.
   * @default "Item List"
   */
  title?: string;

  /**
   * @format textarea
   * @description The initial list of items.
   * @default ["Item 1", "Item 2", "Item 3"]
   */
  items?: string[];
}

export default function ItemList({ title = "Item List", items = ["Item 1", "Item 2", "Item 3"] }: Props) {
  const deleteLink = (index: number) => usePartialSection({ props: { items: items.filter((_, i) => i !== index) } });

  return (
    <div class="container py-10 flex flex-col items-center justify-center gap-4">
      <h2 class="text-2xl font-bold mb-4">{title}</h2>
      <table class="table delete-row-example">
        <thead>
          <tr>
            <th>Item</th>
            <th></th>
          </tr>
        </thead>
        <tbody hx-target="closest tr" hx-swap="outerHTML swap:1s">
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <button
                  class="btn danger"
                  hx-get={deleteLink(index)["f-partial"]}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
