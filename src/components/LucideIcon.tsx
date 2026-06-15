import { ComponentType } from 'react';
import {
  Code,
  Server,
  Database,
  Cpu,
  Wrench,
  GitBranch,
  Terminal,
  Smartphone,
  Layers,
  Shield,
  Workflow,
  Eye,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
  Calendar,
  GraduationCap,
  Trophy,
  Sparkles,
  MapPin,
  Activity,
  CheckCircle2,
  Send,
  ArrowUpRight,
  Lock,
  Menu,
  X,
} from 'lucide-react';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Code,
  Server,
  Database,
  Cpu,
  Wrench,
  GitBranch,
  Terminal,
  Smartphone,
  Layers,
  Shield,
  Workflow,
  Eye,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
  Calendar,
  GraduationCap,
  Trophy,
  Sparkles,
  MapPin,
  Activity,
  CheckCircle2,
  Send,
  ArrowUpRight,
  Lock,
  Menu,
  X,
};

interface LucideIconProps {
  name: string;
  className?: string;
}

export default function LucideIcon({ name, className }: LucideIconProps) {
  const IconComponent = iconMap[name] || Code;
  return <IconComponent className={className} />;
}
