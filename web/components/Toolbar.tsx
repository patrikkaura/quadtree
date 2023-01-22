import GitHubIcon from "@mui/icons-material/GitHub";

export function Toolbar() {
  return (
    <div className="flex flex-row items-center justify-between p-4 border-b-nord-14 border-b-2">
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-xl font-medium text-gray-800">QUADTREE</h1>
        <span className="bg-nord7 px-2 py-1 w-15 text-white text-sm rounded-full">
          v1.1.0
        </span>
      </div>
      <a
        className="hover:bg-nord6 hover:rounded-full p-2"
        href="https://github.com/patrikkaura/quadtree"
      >
        <GitHubIcon className="text-nord10" />
      </a>
    </div>
  );
}
