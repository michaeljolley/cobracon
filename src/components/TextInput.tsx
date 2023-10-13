import { useRef, useState } from 'preact/hooks';
import './TextInput.css';

export default function TextInput(
  props: { 
   type: string,
   name: string,
   value?: string
 }) {

  const [value, setValue] = useState(props.value);
  const [state, setState] = useState(props);

  const input = useRef<HTMLInputElement>(null);
  const machine = useRef<HTMLSpanElement>(null);

  const onKeyUp = () => setValue(input.current?.value || '');

  return (
    <>
      <p>
        <span class="input-wrap">
          <span ref={machine} class="width-machine" aria-hidden="true">{value}</span>
          <input ref={input} class="input" onKeyUp={onKeyUp} name={state.name} id={state.name} value={value} type={state.type} autofocus />
          <span class="cursor">&nbsp;</span>
        </span>
      </p>
    </>
  );
}
