"""NumPy gerekir. python tests/statistics_test.py"""
import sys,math,unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
from prepare_data import gammaq,holm
class StatisticsTest(unittest.TestCase):
 def test_even_df_reference(self):
  for a,x in [(1,2),(28,509.1078545318103),(3,5),(10,20)]:
   independent=math.exp(-x)*sum(x**i/math.factorial(i) for i in range(a))
   self.assertAlmostEqual(gammaq(a,x)/independent,1,places=10)
 def test_half_df(self):
  self.assertAlmostEqual(gammaq(.5,2),math.erfc(math.sqrt(2)),places=13)
 def test_holm(self):
  self.assertEqual(holm([.01,.02,.5]),[.03,.04,.5])
if __name__=='__main__':unittest.main()
