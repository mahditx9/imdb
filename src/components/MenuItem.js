import Link from "next/link";

function MenuItem({ title, path, Icon }) {
  return (
    <div>
      <Link href={path} className="text-xl">
        <Icon className="sm:block hidden" />
        <p className="sm:hidden ">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
