import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Zap, FileText, BarChart3, Sparkles, Menu, X } from "lucide-react";

// Curriculum Data
const curriculumData = {
  6: { name: "Global Success 6", units: 12, color: "bg-green-500" },
  7: { name: "Global Success 7", units: 12, color: "bg-blue-500" },
  8: { name: "Global Success 8", units: 12, color: "bg-orange-500" },
  9: { name: "Global Success 9", units: 12, color: "bg-purple-500" },
};

const unitLessons = {
  1: ["Getting Started", "A Closer Look 1", "A Closer Look 2", "Communication", "Skills 1", "Skills 2", "Looking Back & Project"],
  2: ["Getting Started", "A Closer Look 1", "A Closer Look 2", "Communication", "Skills 1", "Skills 2", "Looking Back & Project"],
  3: ["Getting Started", "A Closer Look 1", "A Closer Look 2", "Communication", "Skills 1", "Skills 2", "Looking Back & Project"],
};

const vocabularyBank = [
  { unit: 1, topic: "Leisure activities", words: ["reading", "swimming", "dancing", "singing", "playing", "drawing"] },
  { unit: 2, topic: "School subjects", words: ["Math", "English", "Science", "History", "PE", "Art"] },
  { unit: 3, topic: "Family members", words: ["father", "mother", "brother", "sister", "uncle", "aunt"] },
];

const grammarBank = [
  { id: 1, topic: "Present Simple", level: "A1", examples: "I play, You play, He/She plays" },
  { id: 2, topic: "Present Continuous", level: "A1", examples: "I am playing, You are playing" },
  { id: 3, topic: "Past Simple", level: "A2", examples: "I played, You played, He played" },
  { id: 4, topic: "Future Simple", level: "A2", examples: "I will play, You will play" },
  { id: 5, topic: "Present Perfect", level: "B1", examples: "I have played, You have played" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(8);
  const [selectedUnit, setSelectedUnit] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ENGLISH TEACHER PRO</h1>
              <p className="text-xs text-gray-500">Global Success 6-9</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">Trang chủ</a>
            <a href="#curriculum" className="text-sm font-medium text-gray-700 hover:text-blue-600">Global Success</a>
            <a href="#grammar" className="text-sm font-medium text-gray-700 hover:text-blue-600">Ngữ pháp</a>
            <a href="#tools" className="text-sm font-medium text-gray-700 hover:text-blue-600">Công cụ</a>
            <Button className="bg-blue-600 hover:bg-blue-700">Đăng nhập</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 p-4 space-y-3">
            <a href="#" className="block text-sm font-medium text-gray-700">Trang chủ</a>
            <a href="#curriculum" className="block text-sm font-medium text-gray-700">Global Success</a>
            <a href="#grammar" className="block text-sm font-medium text-gray-700">Ngữ pháp</a>
            <a href="#tools" className="block text-sm font-medium text-gray-700">Công cụ</a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Đăng nhập</Button>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Hero Dashboard */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">👋 Xin chào Thầy Điệp</h2>
            <p className="text-gray-600">Nền tảng hỗ trợ giảng dạy Tiếng Anh toàn diện</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">4</div>
                <p className="text-sm text-blue-100">Lớp học</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">176</div>
                <p className="text-sm text-green-100">Học sinh</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">48</div>
                <p className="text-sm text-orange-100">Units</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">125</div>
                <p className="text-sm text-purple-100">Giáo án</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-16 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Soạn giáo án</span>
            </Button>
            <Button className="h-16 bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Tạo bài tập</span>
            </Button>
            <Button className="h-16 bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Tạo đề kiểm tra</span>
            </Button>
            <Button className="h-16 bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Hỏi AI</span>
            </Button>
          </div>
        </section>

        {/* Global Success Curriculum */}
        <section id="curriculum" className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">📚 Global Success 6-9</h3>
            <p className="text-gray-600 text-sm mt-1">Kho tài liệu đầy đủ theo chương trình</p>
          </div>

          {/* Grade Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(curriculumData).map(([grade, data]) => (
              <Card
                key={grade}
                className={`cursor-pointer transition-all ${
                  selectedGrade === parseInt(grade)
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedGrade(parseInt(grade))}
              >
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${data.color} rounded-lg mb-4`}></div>
                  <h4 className="font-bold text-gray-900">{data.name}</h4>
                  <p className="text-sm text-gray-600">{data.units} Units</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Units Display */}
          <Card>
            <CardHeader>
              <CardTitle>{curriculumData[selectedGrade as keyof typeof curriculumData].name}</CardTitle>
              <CardDescription>Chọn Unit để xem chi tiết</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Button
                    key={i + 1}
                    variant={selectedUnit === i + 1 ? "default" : "outline"}
                    className="h-12"
                    onClick={() => setSelectedUnit(i + 1)}
                  >
                    Unit {i + 1}
                  </Button>
                ))}
              </div>

              {/* Unit Content */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Unit {selectedUnit}: Lessons</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {unitLessons[selectedUnit as keyof typeof unitLessons]?.map((lesson, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-blue-100 hover:shadow-md transition-all cursor-pointer">
                      <p className="font-medium text-gray-900">{lesson}</p>
                      <div className="flex gap-2 mt-2 text-xs">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">📝 Giáo án</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded">📖 Bài tập</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Grammar & Vocabulary Bank */}
        <section id="grammar" className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">🧠 Ngữ Pháp & Từ Vựng</h3>

          <Tabs defaultValue="grammar" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="grammar">Ngữ pháp</TabsTrigger>
              <TabsTrigger value="vocabulary">Từ vựng</TabsTrigger>
            </TabsList>

            <TabsContent value="grammar" className="space-y-4">
              {grammarBank.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900">{item.topic}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.examples}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {item.level}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">📝 Bài tập</Button>
                      <Button variant="outline" size="sm">📋 Đề kiểm tra</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="vocabulary" className="space-y-4">
              {vocabularyBank.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-gray-900">Unit {item.unit}: {item.topic}</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.words.map((word, widx) => (
                        <span key={widx} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                          {word}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">🎮 Game</Button>
                      <Button variant="outline" size="sm">📝 Bài tập</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>

        {/* Exercise Generator */}
        <section id="tools" className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">⚙️ Công Cụ Tạo Bài Tập</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Tạo Bài Tập
                </CardTitle>
                <CardDescription>Tạo bài tập tự động theo Unit và mức độ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-900">Lớp</label>
                  <div className="flex gap-2 mt-2">
                    {[6, 7, 8, 9].map((g) => (
                      <Button key={g} variant="outline" size="sm">
                        Lớp {g}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900">Mức độ</label>
                  <div className="flex gap-2 mt-2">
                    {["A1", "A2", "B1"].map((level) => (
                      <Button key={level} variant="outline" size="sm">
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900">Loại bài tập</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Multiple Choice", "Fill Gap", "Matching", "Transformation"].map((type) => (
                      <Button key={type} variant="outline" size="sm">
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  🚀 Tạo bài tập
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  Tạo Đề Kiểm Tra
                </CardTitle>
                <CardDescription>Tạo đề theo ma trận kiến thức</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-900">Thời lượng</label>
                  <div className="flex gap-2 mt-2">
                    {["15 phút", "45 phút", "90 phút"].map((time) => (
                      <Button key={time} variant="outline" size="sm">
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900">Nội dung kiểm tra</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Vocabulary", "Grammar", "Reading", "Writing"].map((skill) => (
                      <Button key={skill} variant="outline" size="sm">
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  📋 Tạo đề kiểm tra
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Teacher Preview */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">🤖 AI Teacher Assistant</h3>

          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Hỗ trợ AI
              </CardTitle>
              <CardDescription>AI giúp soạn giáo án, tạo bài tập, phân tích dữ liệu học sinh</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="font-medium text-gray-900">📝 Soạn giáo án</p>
                  <p className="text-xs text-gray-600 mt-1">AI tạo giáo án CV5512 tự động</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="font-medium text-gray-900">📊 Phân tích học sinh</p>
                  <p className="text-xs text-gray-600 mt-1">AI phát hiện điểm yếu và gợi ý</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="font-medium text-gray-900">🎯 Cá nhân hóa bài học</p>
                  <p className="text-xs text-gray-600 mt-1">Điều chỉnh theo năng lực học sinh</p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                Bắt đầu với AI
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* What's Next */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">📋 What's Next?</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Add login system & teacher accounts</li>
            <li>✅ Build AI exercise generator (OpenAI integration)</li>
            <li>✅ Create lesson plan editor (CV5512 format)</li>
            <li>✅ Add class management & student dashboard</li>
            <li>✅ Build pronunciation lab & listening center</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 English Teacher Pro. Powered by Buildify.</p>
        </div>
      </footer>
    </div>
  );
}
