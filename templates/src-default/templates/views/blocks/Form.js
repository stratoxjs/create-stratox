
export default function Form(props, container, helper, context)
{
  return `
    <form class="flex flex-wrap gap-x-15" action="${props.action}" data-method="${props.method}">
      ${context.getFields()}
    </form>
  `;
}