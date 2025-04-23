import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

// Временная модель - в реальном приложении здесь будет загружаться настоящая 3D модель
const ProductModel = ({ zoom = 5 }: { zoom?: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Легкое автоматическое вращение для демонстрации
    meshRef.current.rotation.y += 0.003;
    
    // Настраиваем масштаб на основе параметра zoom
    const scale = 1 + (zoom / 10);
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      castShadow
      receiveShadow
    >
      {/* Упрощенная модель кресла для демонстрации */}
      <group>
        {/* Сиденье */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.5, 0.3, 1.5]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        
        {/* Спинка */}
        <mesh position={[0, 1.2, -0.6]} castShadow>
          <boxGeometry args={[1.5, 2, 0.3]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        
        {/* Подлокотники */}
        <mesh position={[0.9, 0.5, 0]} castShadow>
          <boxGeometry args={[0.2, 0.7, 1.5]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        <mesh position={[-0.9, 0.5, 0]} castShadow>
          <boxGeometry args={[0.2, 0.7, 1.5]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        
        {/* Ножка */}
        <mesh position={[0, -0.7, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.5, 1, 16]} />
          <meshStandardMaterial color="#555" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Основание */}
        <mesh position={[0, -1.3, 0]} rotation={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[1, 1, 0.1, 32]} />
          <meshStandardMaterial color="#555" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Колесики */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const radians = (angle * Math.PI) / 180;
          const x = Math.cos(radians) * 0.8;
          const z = Math.sin(radians) * 0.8;
          return (
            <mesh key={i} position={[x, -1.4, z]} castShadow>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color="#222" metalness={0.5} roughness={0.4} />
            </mesh>
          );
        })}
      </group>
    </mesh>
  );
};

export default ProductModel;
