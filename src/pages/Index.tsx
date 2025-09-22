import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [priceRange, setPriceRange] = useState([50000]);
  const [performanceFilter, setPerformanceFilter] = useState('all');
  const [purposeFilter, setPurposeFilter] = useState('all');

  const builds = [
    {
      id: 1,
      name: 'Ultimate Gaming Rig',
      price: 250000,
      performance: 'ultra',
      purpose: 'gaming',
      specs: 'RTX 4090 • i9-13900K • 32GB DDR5',
      image: '/img/f3d4b335-562e-4096-ad95-5d0822911b60.jpg',
      fps: '4K 120+ FPS'
    },
    {
      id: 2,
      name: 'Pro Workstation',
      price: 180000,
      performance: 'high',
      purpose: 'work',
      specs: 'RTX 4080 • i7-13700K • 64GB DDR5',
      image: '/img/ad704ff7-1c79-42cf-92d5-e3fa85d95f9b.jpg',
      fps: '4K 80+ FPS'
    },
    {
      id: 3,
      name: 'Gaming Beast',
      price: 150000,
      performance: 'high',
      purpose: 'gaming',
      specs: 'RTX 4070 Ti • i5-13600K • 32GB DDR5',
      image: '/img/f3d4b335-562e-4096-ad95-5d0822911b60.jpg',
      fps: '1440p 144+ FPS'
    },
    {
      id: 4,
      name: 'Budget Gaming',
      price: 80000,
      performance: 'medium',
      purpose: 'gaming',
      specs: 'RTX 4060 • i5-12400F • 16GB DDR4',
      image: '/img/ad704ff7-1c79-42cf-92d5-e3fa85d95f9b.jpg',
      fps: '1080p 144+ FPS'
    }
  ];

  const filteredBuilds = builds.filter(build => {
    const priceMatch = build.price <= priceRange[0] * 1000;
    const performanceMatch = performanceFilter === 'all' || build.performance === performanceFilter;
    const purposeMatch = purposeFilter === 'all' || build.purpose === purposeFilter;
    return priceMatch && performanceMatch && purposeMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PC BUILDS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Конфигуратор</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Заказать сборку
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/50">
                  🚀 Игровые сборки нового поколения
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    ULTIMATE
                  </span>
                  <br />
                  <span className="text-foreground">PC BUILDS</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Профессиональная сборка игровых ПК с гарантией максимальной производительности
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Выбрать сборку
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Settings" className="mr-2 h-5 w-5" />
                  Конфигуратор
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/f3d4b335-562e-4096-ad95-5d0822911b60.jpg" 
                  alt="Gaming PC" 
                  className="rounded-2xl shadow-2xl border border-primary/20"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <h2 className="text-2xl font-bold">Каталог сборок</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Цена до:</span>
                <div className="w-32">
                  <Slider 
                    value={priceRange} 
                    onValueChange={setPriceRange}
                    max={300}
                    min={50}
                    step={10}
                    className="w-full"
                  />
                </div>
                <span className="text-sm font-medium">{priceRange[0]}к ₽</span>
              </div>
              <Select value={performanceFilter} onValueChange={setPerformanceFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Производительность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая</SelectItem>
                  <SelectItem value="ultra">Ultra</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                </SelectContent>
              </Select>
              <Select value={purposeFilter} onValueChange={setPurposeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Назначение" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любое</SelectItem>
                  <SelectItem value="gaming">Игры</SelectItem>
                  <SelectItem value="work">Работа</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Builds Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBuilds.map((build) => (
              <Card key={build.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={build.image} 
                      alt={build.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {build.fps}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <CardTitle className="text-lg">{build.name}</CardTitle>
                      <CardDescription className="text-sm">{build.specs}</CardDescription>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {build.price.toLocaleString()} ₽
                      </span>
                      <Badge variant={build.performance === 'ultra' ? 'default' : 'secondary'}>
                        {build.performance.toUpperCase()}
                      </Badge>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Icon name="Eye" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 PC Builds. Профессиональная сборка игровых компьютеров</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;