import { Html } from "@react-three/drei";

const Loading3D = () => {
  return (
    <Html center>
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-2 text-gray-900 dark:text-gray-100">Загрузка 3D модели...</p>
      </div>
    </Html>
  );
};

export default Loading3D;
