interface DeleteChildProps {
  setElementId: React.Dispatch<React.SetStateAction<string | null>>;
  elementId: string;
}

const deleteChild = ({ setElementId, elementId }: DeleteChildProps) => {
  const element = document.getElementById(elementId);
  const parent = element.parentNode;
  parent.removeChild(element);
  setElementId(null);
};

export default deleteChild;
