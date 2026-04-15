const progress = {
  architecture: 100,
  compose: 95,
  kmp: 90,
  testing: 85,
  cicd: 92,
  leadership: 88,
  ai: 75
};

const overall = Math.round(Object.values(progress).reduce((a, b) => a + b, 0) / Object.keys(progress).length);
console.log(`Overall Senior Completion: ${overall}%`);
