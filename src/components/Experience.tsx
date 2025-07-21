import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GitBranch, 
  Cloud, 
  Container, 
  Shield, 
  Monitor, 
  Database,
  Settings,
  Network
} from "lucide-react";

const Experience = () => {
  const responsibilities = [
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Version Control & Release Management",
      description: "Managing and tracking application release changes using VCS tools such as Azure Repo, GitHub, AWS Code Commit and Bitbucket. Partnering with cross-functional teams to deploy application changes with detailed documentation.",
      technologies: ["Azure Repo", "GitHub", "AWS CodeCommit", "Bitbucket"]
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Infrastructure Design",
      description: "Designing, deploying, and managing scalable, secure, and highly available cloud infrastructure using Infrastructure as Code (IaC) tools.",
      technologies: ["Terraform", "Cloud CLI", "Ansible", "ARM Templates"]
    },
    {
      icon: <Container className="w-5 h-5" />,
      title: "CI/CD Pipeline Development",
      description: "Developing and maintaining comprehensive CI/CD pipelines to automate build, testing, and deployment of containerized and non-containerized applications across multiple environments.",
      technologies: ["Java", "WSO2", "Python", ".NET", "Angular", "Node.js", "React.js", "Qlik Talend"]
    },
    {
      icon: <Container className="w-5 h-5" />,
      title: "Container Orchestration",
      description: "Building containerized applications and deploying them to various container platforms with multi-container and single container deployment strategies.",
      technologies: ["Azure ACS", "AKS", "AWS ECS", "AWS Elastic Beanstalk", "Docker"]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security & Authentication",
      description: "Configuring various authentication methods for pipeline deployments and implementing cloud security best practices including IAM, MFA, encryption and network security.",
      technologies: ["IAM", "MFA", "mTLS", "JWT", "WAF", "SSL/TLS"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Process Automation",
      description: "Automating various processes including deployments, file processing, data loading into databases, process scheduling, and backup procedures using multiple scripting languages.",
      technologies: ["Shell", "Python", "PowerShell", "YAML"]
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Monitoring & Performance",
      description: "Implementing monitoring, logging, and alerting solutions to maintain system reliability and optimize performance across cloud environments.",
      technologies: ["CloudWatch", "Azure Monitor", "Prometheus", "Grafana"]
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Network Architecture",
      description: "Working extensively with VPCs, Security Groups, Firewall Policies, VPNs, and Site-to-Site connectivity to enable secure communication across cloud and on-premises environments.",
      technologies: ["VPC", "VPN", "Security Groups", "Firewall", "DNS"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Infrastructure Management",
      description: "Managing Web Application Firewall services, App Services, and Domain Name System configurations across multiple cloud platforms and third-party services.",
      technologies: ["WAF", "App Services", "Route 53", "GoDaddy", "Cloudflare"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key responsibilities and achievements as a Lead DevOps Engineer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {responsibilities.map((item, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1 flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-lg leading-tight">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management & Leadership */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Leadership & Management
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Managing periodic reporting on progress to management and customers, 
                ensuring transparent communication and successful project delivery across 
                cross-functional teams and release management processes.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Team Leadership', 'Project Management', 'Client Communication', 
                  'Progress Reporting', 'Cross-functional Collaboration'
                ].map((skill) => (
                  <Badge 
                    key={skill}
                    className="px-3 py-1 bg-primary text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;