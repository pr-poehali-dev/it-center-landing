import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="text-9xl font-bold text-gray-200 dark:text-gray-800">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-orange-500">404</h1>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Страница не найдена</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Упс! Кажется, вы пытаетесь найти страницу, которая не существует или была перемещена.
        </p>
        
        <Button 
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
