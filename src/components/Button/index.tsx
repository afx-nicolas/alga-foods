import Link from 'next/link';
import styles from './Button.module.sass';

interface LinkType {
  isLink: true;
  href: string;
}

type ButtonType = {
  isLink: false;
};

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  style: 'filled' | 'outline';
  size: 'sm' | 'md' | 'lg';
} & (LinkType | ButtonType);

export default function Button(props: ButtonProps) {
  const classNames = [
    styles.button,
    styles[props.variant],
    styles[props.style],
    styles[props.size],
    props.className,
  ].join(' ');

  return (
    <>
      {props.isLink ? (
        <Link href={props.href}>
          <a onClick={props.onClick} className={classNames}>
            {props.children}
          </a>
        </Link>
      ) : (
        <button onClick={props.onClick} className={classNames}>
          {props.children}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  isLink: false,
  variant: 'primary',
  style: 'filled',
  size: 'sm',
};
