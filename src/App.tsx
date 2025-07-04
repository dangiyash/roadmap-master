import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import RoadmapBuilder from './pages/RoadmapBuilder';
import PublicRoadmap from './pages/PublicRoadmap';
import UserRoadmaps from './pages/UserRoadmaps';
import GlobalRoadmaps from './pages/GlobalRoadmaps';
import Forum from './pages/Forum';
import ForumPost from './pages/ForumPost';
import AITeacher from "./pages/AITeacher";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/myroadmaps" element={<UserRoadmaps />} />
            <Route path="/exploreroadmaps" element={<GlobalRoadmaps />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/post/:postId" element={<ForumPost />} />
            <Route path="/roadmap-builder" element={<RoadmapBuilder />} />
            <Route path="/roadmap-builder/:roadmapId" element={<RoadmapBuilder />} />
            <Route path="/roadmap/:id" element={<PublicRoadmap />} />
            <Route path="/ai-teacher" element={<AITeacher />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
