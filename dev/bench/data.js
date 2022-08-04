window.BENCHMARK_DATA = {
  "lastUpdate": 1659635536677,
  "repoUrl": "https://github.com/PrettyWood/pydantic-core",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "6b430f9de18cfd75141ee518d25fba625137b5dd",
          "message": "temporarily remove paths restriction on benchmarks",
          "timestamp": "2022-05-11T10:32:59+01:00",
          "tree_id": "0ef483164d7dc40843bccf3a93b4297be801364a",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6b430f9de18cfd75141ee518d25fba625137b5dd"
        },
        "date": 1652261877752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 25350.024953455166,
            "unit": "iter/sec",
            "range": "stddev: 0.001305452273109351",
            "extra": "mean: 39.447692924803285 usec\nrounds: 54345"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 215947.6208061508,
            "unit": "iter/sec",
            "range": "stddev: 0.00001279990227496455",
            "extra": "mean: 4.630752569845017 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 940784.8753177086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010477713747522003",
            "extra": "mean: 1.0629422583591523 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 170268.86398776842,
            "unit": "iter/sec",
            "range": "stddev: 0.0004811225320834584",
            "extra": "mean: 5.8730643793559745 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1676.6594747657155,
            "unit": "iter/sec",
            "range": "stddev: 0.027675612373301333",
            "extra": "mean: 596.424029476667 usec\nrounds: 9058"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17358.965045785382,
            "unit": "iter/sec",
            "range": "stddev: 0.000029691219797545142",
            "extra": "mean: 57.607121009947086 usec\nrounds: 20081"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3120.596545716897,
            "unit": "iter/sec",
            "range": "stddev: 0.0001095284458401033",
            "extra": "mean: 320.45155000012 usec\nrounds: 3540"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5910.097709442715,
            "unit": "iter/sec",
            "range": "stddev: 0.00007716428180793458",
            "extra": "mean: 169.2019403337908 usec\nrounds: 6771"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2501.5343584087886,
            "unit": "iter/sec",
            "range": "stddev: 0.00006278202012118965",
            "extra": "mean: 399.75465323454284 usec\nrounds: 2829"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4411.128098346912,
            "unit": "iter/sec",
            "range": "stddev: 0.00006489568629268579",
            "extra": "mean: 226.69937886744978 usec\nrounds: 5139"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 768.739356314636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003579689462154051",
            "extra": "mean: 1.3008310187135932 msec\nrounds: 855"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1378.8414408907752,
            "unit": "iter/sec",
            "range": "stddev: 0.00010030355235325868",
            "extra": "mean: 725.2465514482711 usec\nrounds: 1623"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1500.8985567655768,
            "unit": "iter/sec",
            "range": "stddev: 0.00009544097699597142",
            "extra": "mean: 666.2675471918577 usec\nrounds: 1727"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 267.20326498035223,
            "unit": "iter/sec",
            "range": "stddev: 0.08880268475463554",
            "extra": "mean: 3.7424692399381088 msec\nrounds: 1292"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27273.29488253122,
            "unit": "iter/sec",
            "range": "stddev: 0.000017312752550409826",
            "extra": "mean: 36.66590356270113 usec\nrounds: 32363"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "22c1cae28b8eac6039f51d7a33c236d20bba3fed",
          "message": "tweaks to benchmarks CI",
          "timestamp": "2022-05-11T10:40:22+01:00",
          "tree_id": "586e12010011afafe3d6e41d99968d9a93093ba8",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/22c1cae28b8eac6039f51d7a33c236d20bba3fed"
        },
        "date": 1652262182317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 34478.43001360939,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853902776968035",
            "extra": "mean: 29.003640815584646 usec\nrounds: 64936"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 22047.052882601965,
            "unit": "iter/sec",
            "range": "stddev: 0.0017989817789205095",
            "extra": "mean: 45.35753623510977 usec\nrounds: 40320"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 304774.7114874032,
            "unit": "iter/sec",
            "range": "stddev: 4.850711985617787e-7",
            "extra": "mean: 3.2811121208832037 usec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1219172.8936220936,
            "unit": "iter/sec",
            "range": "stddev: 4.7599405274193255e-8",
            "extra": "mean: 820.2282098224388 nsec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 191828.7480400903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004203535846785866",
            "extra": "mean: 5.212982987258082 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 2191.7446912232904,
            "unit": "iter/sec",
            "range": "stddev: 0.019210177770001724",
            "extra": "mean: 456.25752123613654 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 22880.06102813421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010866602842384837",
            "extra": "mean: 43.706177128214875 usec\nrounds: 22989"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3867.060942662483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017846776508847355",
            "extra": "mean: 258.59432132752914 usec\nrounds: 3887"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 8181.079786855855,
            "unit": "iter/sec",
            "range": "stddev: 0.000001259592010680422",
            "extra": "mean: 122.23325356228057 usec\nrounds: 8211"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3429.0223473492,
            "unit": "iter/sec",
            "range": "stddev: 0.000002707741346858946",
            "extra": "mean: 291.62831230104064 usec\nrounds: 3455"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 6206.210226807806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015960080522008193",
            "extra": "mean: 161.12892787300163 usec\nrounds: 6239"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1083.6496892849405,
            "unit": "iter/sec",
            "range": "stddev: 0.000004191645523801962",
            "extra": "mean: 922.8074440365154 usec\nrounds: 1090"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1904.825536775508,
            "unit": "iter/sec",
            "range": "stddev: 0.000008904548536466302",
            "extra": "mean: 524.9824620121387 usec\nrounds: 1948"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1992.8849188928682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001021306419722112",
            "extra": "mean: 501.7851209168377 usec\nrounds: 2051"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 329.2671309190059,
            "unit": "iter/sec",
            "range": "stddev: 0.07157791471822271",
            "extra": "mean: 3.0370477527135344 msec\nrounds: 1290"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 37822.93552312102,
            "unit": "iter/sec",
            "range": "stddev: 6.427638900628171e-7",
            "extra": "mean: 26.43898434030071 usec\nrounds: 38315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c4102a3c89515fd3999d7a5e05121df6ef3abf",
          "message": "add benchmarks to CI (#66)\n\n* add benchmarks to CI\r\n\r\n* improving benchmarks\r\n\r\n* decrease warmup iterations\r\n\r\n* add link to benchmarks to readme\r\n\r\n* remove benchmarks from ci.yml",
          "timestamp": "2022-05-11T11:10:40+01:00",
          "tree_id": "daa9781b24da75fe5a2b37456432b0e61eacf7a8",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/18c4102a3c89515fd3999d7a5e05121df6ef3abf"
        },
        "date": 1652263966333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 35948.72849252688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112228789003178",
            "extra": "mean: 27.81739555010639 usec\nrounds: 56180"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 24233.791619751304,
            "unit": "iter/sec",
            "range": "stddev: 0.0010573158437508264",
            "extra": "mean: 41.26469417955086 usec\nrounds: 34723"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 252491.87851524877,
            "unit": "iter/sec",
            "range": "stddev: 1.63212302457631e-7",
            "extra": "mean: 3.9605234270519594 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 984497.5109723401,
            "unit": "iter/sec",
            "range": "stddev: 4.589521201877868e-8",
            "extra": "mean: 1.015746600529712 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 212081.125326338,
            "unit": "iter/sec",
            "range": "stddev: 0.0003119399855076994",
            "extra": "mean: 4.715176791245636 usec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 2528.0329095564457,
            "unit": "iter/sec",
            "range": "stddev: 0.013044415433749774",
            "extra": "mean: 395.5644707866775 usec\nrounds: 8592"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 19320.4844170213,
            "unit": "iter/sec",
            "range": "stddev: 9.700711282877019e-7",
            "extra": "mean: 51.758536608895916 usec\nrounds: 19763"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3797.688620750334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021026532075322585",
            "extra": "mean: 263.3180599736541 usec\nrounds: 3835"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 7027.210504976325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015235936252939916",
            "extra": "mean: 142.30397670481753 usec\nrounds: 7083"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3102.381270728865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025815862512631983",
            "extra": "mean: 322.33304443752746 usec\nrounds: 3128"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5517.800116951731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020278599697715628",
            "extra": "mean: 181.23164645413846 usec\nrounds: 5541"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 919.2315866008385,
            "unit": "iter/sec",
            "range": "stddev: 0.000004035725505970004",
            "extra": "mean: 1.0878651414686795 msec\nrounds: 926"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1621.6838047974477,
            "unit": "iter/sec",
            "range": "stddev: 0.000004152889618443191",
            "extra": "mean: 616.6430206934838 usec\nrounds: 1643"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1719.9167879850604,
            "unit": "iter/sec",
            "range": "stddev: 0.000006697017179830309",
            "extra": "mean: 581.4234775692452 usec\nrounds: 1761"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 422.58846569927977,
            "unit": "iter/sec",
            "range": "stddev: 0.04453661325612685",
            "extra": "mean: 2.3663684202673316 msec\nrounds: 1273"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 34154.59513672076,
            "unit": "iter/sec",
            "range": "stddev: 7.825404243656271e-7",
            "extra": "mean: 29.278637208170743 usec\nrounds: 35089"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69098c4f8a4b20f08a8b982f66079bba10481600",
          "message": "List as enum (#54)\n\n* use enum dispatch for sequences\r\n\r\n* rename ListInput GenericSequence\r\n\r\n* implement generic dict as enum\r\n\r\n* more enum dispatch on sequences\r\n\r\n* more enum dispatch on mappings\r\n\r\n* a few more inlines\r\n\r\n* tweak dict validator\r\n\r\n* incorporate enumerate\r\n\r\n* remove unenecessary iterator\r\n\r\n* more list and dict tests",
          "timestamp": "2022-05-11T11:13:05+01:00",
          "tree_id": "dd48feedd71ddc6c8e903078fbdc6ea0e03e7d39",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/69098c4f8a4b20f08a8b982f66079bba10481600"
        },
        "date": 1652264131174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 26425.928721566695,
            "unit": "iter/sec",
            "range": "stddev: 0.0008253042824140784",
            "extra": "mean: 37.8416217850418 usec\nrounds: 55249"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 15692.497237175516,
            "unit": "iter/sec",
            "range": "stddev: 0.0022479104248595686",
            "extra": "mean: 63.72472047540022 usec\nrounds: 30212"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 202749.6986856139,
            "unit": "iter/sec",
            "range": "stddev: 0.000009514269588002117",
            "extra": "mean: 4.932189820664601 usec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 967009.3276073326,
            "unit": "iter/sec",
            "range": "stddev: 9.963077551663712e-7",
            "extra": "mean: 1.0341161883869452 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 160385.82002064548,
            "unit": "iter/sec",
            "range": "stddev: 0.000484811131064702",
            "extra": "mean: 6.234965160082686 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1393.2334570120404,
            "unit": "iter/sec",
            "range": "stddev: 0.027217136197092463",
            "extra": "mean: 717.7547990733889 usec\nrounds: 7988"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17714.985874435533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005837626954685201",
            "extra": "mean: 56.44938173183069 usec\nrounds: 20834"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2930.935027629462,
            "unit": "iter/sec",
            "range": "stddev: 0.00007522970552979807",
            "extra": "mean: 341.18804769575496 usec\nrounds: 3732"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5072.416889774781,
            "unit": "iter/sec",
            "range": "stddev: 0.00007534671856079127",
            "extra": "mean: 197.1446791007749 usec\nrounds: 6407"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2325.300805720719,
            "unit": "iter/sec",
            "range": "stddev: 0.00008595765958114616",
            "extra": "mean: 430.0518872826234 usec\nrounds: 3043"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 3893.5109545926093,
            "unit": "iter/sec",
            "range": "stddev: 0.00012570944997130018",
            "extra": "mean: 256.83759764960854 usec\nrounds: 4936"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 791.3929305485312,
            "unit": "iter/sec",
            "range": "stddev: 0.00014191811760875798",
            "extra": "mean: 1.2635948103641494 msec\nrounds: 907"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1517.635066037196,
            "unit": "iter/sec",
            "range": "stddev: 0.00008983328680023544",
            "extra": "mean: 658.9199356148052 usec\nrounds: 1724"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1454.3250879528025,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173224075931947",
            "extra": "mean: 687.6041734297945 usec\nrounds: 1799"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 277.75573655824604,
            "unit": "iter/sec",
            "range": "stddev: 0.07403441379634378",
            "extra": "mean: 3.600285676873131 msec\nrounds: 1241"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 24912.50305087494,
            "unit": "iter/sec",
            "range": "stddev: 0.00001950293516996522",
            "extra": "mean: 40.14048680527424 usec\nrounds: 30770"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1755071+adriangb@users.noreply.github.com",
            "name": "Adrian Garcia Badaracco",
            "username": "adriangb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6d4184389f3dda4cecc1dc3402dc63d76a8ccab",
          "message": "implement __reduce__ to make SchemaValidator picklable (#53)\n\n* attempt at implementing __reduce__\r\n\r\n* python version\r\n\r\n* remove loc\r\n\r\n* back to rust\r\n\r\n* use array\r\n\r\n* minimize changes\r\n\r\n* again use array\r\n\r\n* remove import\r\n\r\n* test all protocol versions\r\n\r\n* Update src/validators/mod.rs\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* Update src/validators/mod.rs\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* pr feedback\r\n\r\n* pointlessly tweak layout\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-05-11T12:22:54+01:00",
          "tree_id": "009c56dc5106873a6189dc7f72b41e81c90c6b15",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/f6d4184389f3dda4cecc1dc3402dc63d76a8ccab"
        },
        "date": 1652268315085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 27646.82615096265,
            "unit": "iter/sec",
            "range": "stddev: 0.0007975823425689881",
            "extra": "mean: 36.17051717038343 usec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 15149.687370138572,
            "unit": "iter/sec",
            "range": "stddev: 0.0022246765055872137",
            "extra": "mean: 66.0079627762545 usec\nrounds: 27778"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 210741.81608731038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067515951706193614",
            "extra": "mean: 4.745142746543001 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 883093.3428389295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014495441739468722",
            "extra": "mean: 1.1323831258711896 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 161641.09455036782,
            "unit": "iter/sec",
            "range": "stddev: 0.00042499719434656096",
            "extra": "mean: 6.186545585958117 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1572.7391911969876,
            "unit": "iter/sec",
            "range": "stddev: 0.022113796840178408",
            "extra": "mean: 635.833331805584 usec\nrounds: 7200"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 16907.91211195713,
            "unit": "iter/sec",
            "range": "stddev: 0.00005580116911805513",
            "extra": "mean: 59.143908093348124 usec\nrounds: 17953"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2832.9325369466587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803674449148478",
            "extra": "mean: 352.99110972752015 usec\nrounds: 2971"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5210.640827559687,
            "unit": "iter/sec",
            "range": "stddev: 0.00011717054010032895",
            "extra": "mean: 191.91497420257474 usec\nrounds: 5737"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2324.545962760404,
            "unit": "iter/sec",
            "range": "stddev: 0.00010386925226006375",
            "extra": "mean: 430.19153676466675 usec\nrounds: 2448"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4094.5118114319876,
            "unit": "iter/sec",
            "range": "stddev: 0.00005619113276618101",
            "extra": "mean: 244.22936019087138 usec\nrounds: 4406"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 695.119966686474,
            "unit": "iter/sec",
            "range": "stddev: 0.00026569760420190066",
            "extra": "mean: 1.4386005983497214 msec\nrounds: 727"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1321.9664933888203,
            "unit": "iter/sec",
            "range": "stddev: 0.00011226090217757379",
            "extra": "mean: 756.4488245360371 usec\nrounds: 1402"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 653.3834516478503,
            "unit": "iter/sec",
            "range": "stddev: 0.033256881933444185",
            "extra": "mean: 1.5304948380280732 msec\nrounds: 1562"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 302.54897093272393,
            "unit": "iter/sec",
            "range": "stddev: 0.06511875669096467",
            "extra": "mean: 3.3052500456938065 msec\nrounds: 1138"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26686.354120505068,
            "unit": "iter/sec",
            "range": "stddev: 0.000025274712767584005",
            "extra": "mean: 37.47233494258503 usec\nrounds: 27548"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1755071+adriangb@users.noreply.github.com",
            "name": "Adrian Garcia Badaracco",
            "username": "adriangb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d0da7806d338ed9f2d34561921ed1dc0a1eb67b",
          "message": "add types (#50)\n\n* add types\r\n\r\n* guard versions\r\n\r\n* move TypedDict\r\n\r\n* remove mypy in favor of pyright, add test for typing\r\n\r\n* revert unecessary change\r\n\r\n* Update pydantic_core/_types.py\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* pr feedback\r\n\r\n* fix filename\r\n\r\n* Update Makefile\r\n\r\n* a few tweaks\r\n\r\n* :-( fix tests\r\n\r\n* fix pyright complaint with pytest\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-05-11T12:25:50+01:00",
          "tree_id": "082d7ece6733b164470ad48b37be1e2ac9ddf592",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6d0da7806d338ed9f2d34561921ed1dc0a1eb67b"
        },
        "date": 1652268498810,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 25888.45636406876,
            "unit": "iter/sec",
            "range": "stddev: 0.0011369151152302384",
            "extra": "mean: 38.62725478634273 usec\nrounds: 52911"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 17969.151835993896,
            "unit": "iter/sec",
            "range": "stddev: 0.0015764323353242965",
            "extra": "mean: 55.650929388715284 usec\nrounds: 30675"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 206548.13777352165,
            "unit": "iter/sec",
            "range": "stddev: 0.000005368090415345586",
            "extra": "mean: 4.841486400117011 usec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 924146.7842567787,
            "unit": "iter/sec",
            "range": "stddev: 0.000001241803955507628",
            "extra": "mean: 1.0820791859426202 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 172170.43180692432,
            "unit": "iter/sec",
            "range": "stddev: 0.00044408414093048194",
            "extra": "mean: 5.808198245802231 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1574.7511305022754,
            "unit": "iter/sec",
            "range": "stddev: 0.023881813937707237",
            "extra": "mean: 635.0209760961052 usec\nrounds: 8827"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 18199.33484699339,
            "unit": "iter/sec",
            "range": "stddev: 0.000019786986406034487",
            "extra": "mean: 54.947063088143814 usec\nrounds: 23697"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2909.444171372192,
            "unit": "iter/sec",
            "range": "stddev: 0.00006072032027683822",
            "extra": "mean: 343.7082621621044 usec\nrounds: 3700"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5538.861457677753,
            "unit": "iter/sec",
            "range": "stddev: 0.000033933606324276596",
            "extra": "mean: 180.54251900701345 usec\nrounds: 6366"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2379.620570168635,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199910384062807",
            "extra": "mean: 420.2350629071649 usec\nrounds: 3068"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4364.255145223726,
            "unit": "iter/sec",
            "range": "stddev: 0.00004341270610409454",
            "extra": "mean: 229.13417449811746 usec\nrounds: 5129"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 796.2700752827271,
            "unit": "iter/sec",
            "range": "stddev: 0.0001432222183208433",
            "extra": "mean: 1.2558553071895056 msec\nrounds: 918"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1470.3445720979482,
            "unit": "iter/sec",
            "range": "stddev: 0.00008388658171775615",
            "extra": "mean: 680.1126885333815 usec\nrounds: 1875"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1454.207870762067,
            "unit": "iter/sec",
            "range": "stddev: 0.00010392745442016923",
            "extra": "mean: 687.6595981260625 usec\nrounds: 2028"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 272.6086190203901,
            "unit": "iter/sec",
            "range": "stddev: 0.080465091017438",
            "extra": "mean: 3.668262594166928 msec\nrounds: 1200"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26621.840067271758,
            "unit": "iter/sec",
            "range": "stddev: 0.000022022978230362823",
            "extra": "mean: 37.56314354954659 usec\nrounds: 34246"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6339ef58bba2171a3df38092cc40719b5dbb7d5d",
          "message": "fix memory leak in create_class (#58)",
          "timestamp": "2022-05-11T14:11:13+01:00",
          "tree_id": "e5861ba166c3eb8e13faf27a72d3db0ab804a4db",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6339ef58bba2171a3df38092cc40719b5dbb7d5d"
        },
        "date": 1652274782216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 56125.25611919934,
            "unit": "iter/sec",
            "range": "stddev: 0.000002154338167947614",
            "extra": "mean: 17.81729063073121 usec\nrounds: 57475"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34160.19355471772,
            "unit": "iter/sec",
            "range": "stddev: 6.911352924156852e-7",
            "extra": "mean: 29.273838814707016 usec\nrounds: 34966"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 234944.5620142351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023605789465374043",
            "extra": "mean: 4.2563232424992705 usec\nrounds: 129887"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1024324.3809719951,
            "unit": "iter/sec",
            "range": "stddev: 4.427042584890591e-8",
            "extra": "mean: 976.2532441637159 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 765535.4243188262,
            "unit": "iter/sec",
            "range": "stddev: 4.470620026427993e-8",
            "extra": "mean: 1.3062752790175831 usec\nrounds: 78132"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10427.019403788283,
            "unit": "iter/sec",
            "range": "stddev: 0.00000194715001742517",
            "extra": "mean: 95.90468390580398 usec\nrounds: 10538"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20393.04444770523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023794466795897523",
            "extra": "mean: 49.03632719304582 usec\nrounds: 21009"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3683.5354149789714,
            "unit": "iter/sec",
            "range": "stddev: 0.000002198173636732866",
            "extra": "mean: 271.47831833882583 usec\nrounds: 3757"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6820.068456141803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015401239190294125",
            "extra": "mean: 146.62609421456048 usec\nrounds: 6931"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3014.1975643744013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020176237266691643",
            "extra": "mean: 331.7632566024419 usec\nrounds: 3067"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5382.471981961838,
            "unit": "iter/sec",
            "range": "stddev: 0.000001745317168273361",
            "extra": "mean: 185.78824067292473 usec\nrounds: 5468"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 929.9173587121096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033152685632784797",
            "extra": "mean: 1.0753643758031912 msec\nrounds: 934"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1850.5713348190318,
            "unit": "iter/sec",
            "range": "stddev: 0.000003248757742732661",
            "extra": "mean: 540.3736571429117 usec\nrounds: 1855"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1474.6477681124256,
            "unit": "iter/sec",
            "range": "stddev: 0.0010653025899753955",
            "extra": "mean: 678.1280395385652 usec\nrounds: 1821"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 935.8844736930756,
            "unit": "iter/sec",
            "range": "stddev: 0.001402963879981752",
            "extra": "mean: 1.0685079495484302 msec\nrounds: 1328"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 30496.26866248678,
            "unit": "iter/sec",
            "range": "stddev: 8.639986591884395e-7",
            "extra": "mean: 32.79089684929528 usec\nrounds: 32787"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e50eecc6853047adc478d82b7c2992fdc1a6c3d3",
          "message": "prevent segfault on recursive schema (#67)\n\n* prevent segfault on recursive schema, fix #62\r\n\r\n* linting\r\n\r\n* use RecursionError",
          "timestamp": "2022-05-11T16:36:47+01:00",
          "tree_id": "d7f035fc984c71bb47dd761f2fc6fae0495e928c",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/e50eecc6853047adc478d82b7c2992fdc1a6c3d3"
        },
        "date": 1652283520286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55709.571435547376,
            "unit": "iter/sec",
            "range": "stddev: 6.481608376856237e-7",
            "extra": "mean: 17.950236812662254 usec\nrounds: 58143"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34565.2795029435,
            "unit": "iter/sec",
            "range": "stddev: 8.692515433221771e-7",
            "extra": "mean: 28.930765623198337 usec\nrounds: 35716"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 241221.31519455774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016244103551572994",
            "extra": "mean: 4.1455706316560255 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 997906.3101180287,
            "unit": "iter/sec",
            "range": "stddev: 1.0637072850682701e-7",
            "extra": "mean: 1.0020980826162114 usec\nrounds: 106395"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 830043.0768864807,
            "unit": "iter/sec",
            "range": "stddev: 1.1702857145750747e-7",
            "extra": "mean: 1.2047567503978138 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10442.104444550348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026421794288242446",
            "extra": "mean: 95.76613653983244 usec\nrounds: 10583"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20855.224381190576,
            "unit": "iter/sec",
            "range": "stddev: 0.000002627183840884538",
            "extra": "mean: 47.94961596778142 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3663.0218690554293,
            "unit": "iter/sec",
            "range": "stddev: 0.000002769266335433024",
            "extra": "mean: 272.9986431279119 usec\nrounds: 3696"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6729.568454447578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018087208691076866",
            "extra": "mean: 148.59793860022316 usec\nrounds: 6873"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2989.564243855891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025352383145618274",
            "extra": "mean: 334.4969093924592 usec\nrounds: 3013"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5372.706200664851,
            "unit": "iter/sec",
            "range": "stddev: 0.000002161086198724889",
            "extra": "mean: 186.12594149969598 usec\nrounds: 5453"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 931.5784065113894,
            "unit": "iter/sec",
            "range": "stddev: 0.000005302604681338501",
            "extra": "mean: 1.073446950906514 msec\nrounds: 937"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1880.300090318752,
            "unit": "iter/sec",
            "range": "stddev: 0.000003566986056951173",
            "extra": "mean: 531.8300015772897 usec\nrounds: 1902"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1404.8927403231994,
            "unit": "iter/sec",
            "range": "stddev: 0.00133086584340705",
            "extra": "mean: 711.7981119113387 usec\nrounds: 1805"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 948.7103590527059,
            "unit": "iter/sec",
            "range": "stddev: 0.0016930162646991893",
            "extra": "mean: 1.0540624864668993 msec\nrounds: 1330"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32360.621031643448,
            "unit": "iter/sec",
            "range": "stddev: 7.493183377878723e-7",
            "extra": "mean: 30.90175553250854 usec\nrounds: 32896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "82fec734e74537c29153019d83acb29829e79c6c",
          "message": "parse strings as ints in benchmarks",
          "timestamp": "2022-05-24T11:47:30+01:00",
          "tree_id": "c2c0ed9db7b7ecc4804f25b40263455f48c22464",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/82fec734e74537c29153019d83acb29829e79c6c"
        },
        "date": 1653389430856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 64086.09499215597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013476486408914612",
            "extra": "mean: 15.604008952681516 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 40153.137587415746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017862361528299602",
            "extra": "mean: 24.90465403414468 usec\nrounds: 43669"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 279512.08887102816,
            "unit": "iter/sec",
            "range": "stddev: 4.21640008115128e-7",
            "extra": "mean: 3.577662791040919 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1259386.6117416825,
            "unit": "iter/sec",
            "range": "stddev: 8.73830345989386e-8",
            "extra": "mean: 794.0373437961391 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1020671.9227982287,
            "unit": "iter/sec",
            "range": "stddev: 9.542437246556943e-8",
            "extra": "mean: 979.7467508062863 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 12307.841938735806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036890542666971796",
            "extra": "mean: 81.24901221332344 usec\nrounds: 12691"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 24292.789814105196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022057831277830815",
            "extra": "mean: 41.16447751173342 usec\nrounds: 24391"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3040.1844579265758,
            "unit": "iter/sec",
            "range": "stddev: 0.000010293146530047925",
            "extra": "mean: 328.92741010918996 usec\nrounds: 3304"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 7451.954583948222,
            "unit": "iter/sec",
            "range": "stddev: 0.000005148469156432471",
            "extra": "mean: 134.192981013872 usec\nrounds: 8111"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3378.4360368103967,
            "unit": "iter/sec",
            "range": "stddev: 0.000009029967955373785",
            "extra": "mean: 295.99494828503737 usec\nrounds: 3674"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 6140.793835723087,
            "unit": "iter/sec",
            "range": "stddev: 0.000005836808675612388",
            "extra": "mean: 162.84539535958035 usec\nrounds: 6680"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1071.3721165641903,
            "unit": "iter/sec",
            "range": "stddev: 0.00003069582720802522",
            "extra": "mean: 933.3825143843809 usec\nrounds: 1182"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 2064.3741253487347,
            "unit": "iter/sec",
            "range": "stddev: 0.000013973007226040953",
            "extra": "mean: 484.4083190739809 usec\nrounds: 2244"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1354.388385646058,
            "unit": "iter/sec",
            "range": "stddev: 0.00200552327167778",
            "extra": "mean: 738.3406492540092 usec\nrounds: 2278"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 931.1960432882586,
            "unit": "iter/sec",
            "range": "stddev: 0.0024575087700413937",
            "extra": "mean: 1.07388772451049 msec\nrounds: 1677"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 36854.50335359227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017147740033953777",
            "extra": "mean: 27.133726112267045 usec\nrounds: 38315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "8f26e13100a91deadebafe58e7d7bf8d5244b9fc",
          "message": "parse longer strings as ints in benchmarks",
          "timestamp": "2022-05-24T11:55:47+01:00",
          "tree_id": "4af27a74b5479d969e010fbf02e8960488a73e8b",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/8f26e13100a91deadebafe58e7d7bf8d5244b9fc"
        },
        "date": 1653389846281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55691.651898372584,
            "unit": "iter/sec",
            "range": "stddev: 4.6122949876646734e-7",
            "extra": "mean: 17.95601254250499 usec\nrounds: 57804"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34857.93643657332,
            "unit": "iter/sec",
            "range": "stddev: 5.352251937475953e-7",
            "extra": "mean: 28.68787146420949 usec\nrounds: 35461"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 247168.06790147963,
            "unit": "iter/sec",
            "range": "stddev: 1.4497463481118679e-7",
            "extra": "mean: 4.045830064094674 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1098799.7608589416,
            "unit": "iter/sec",
            "range": "stddev: 3.635833604369633e-8",
            "extra": "mean: 910.0839257712566 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 892779.3150418202,
            "unit": "iter/sec",
            "range": "stddev: 3.2199636709558666e-8",
            "extra": "mean: 1.1200976357223995 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10768.835327802735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015697880561416354",
            "extra": "mean: 92.8605526558868 usec\nrounds: 10882"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 21260.02314876261,
            "unit": "iter/sec",
            "range": "stddev: 9.087576133163245e-7",
            "extra": "mean: 47.03663740169552 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3642.481443061177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026963406455467546",
            "extra": "mean: 274.5381179374219 usec\nrounds: 3646"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6862.012965501256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014710134474737006",
            "extra": "mean: 145.72983248902273 usec\nrounds: 6907"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2999.013680789453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023197147019880625",
            "extra": "mean: 333.44296039915446 usec\nrounds: 3005"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5303.614705359805,
            "unit": "iter/sec",
            "range": "stddev: 0.000019881365910791523",
            "extra": "mean: 188.55064999148698 usec\nrounds: 5397"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 934.5958367385317,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504622997816105",
            "extra": "mean: 1.0699812268474358 msec\nrounds: 961"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1803.5640571036258,
            "unit": "iter/sec",
            "range": "stddev: 0.000003232822699377603",
            "extra": "mean: 554.4577116966485 usec\nrounds: 1821"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1364.2742095173735,
            "unit": "iter/sec",
            "range": "stddev: 0.0014005945568061216",
            "extra": "mean: 732.990474366411 usec\nrounds: 1853"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 944.6270277142688,
            "unit": "iter/sec",
            "range": "stddev: 0.0018184115736810226",
            "extra": "mean: 1.0586188735460154 msec\nrounds: 1376"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32076.68487655751,
            "unit": "iter/sec",
            "range": "stddev: 5.614303075727336e-7",
            "extra": "mean: 31.17529145696806 usec\nrounds: 32787"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d7042df471e03ca64087b7b6e6533ded24b34b",
          "message": "Switch from setuptools-rust to maturin (#70)\n\n* Switch from setuptools-rust to maturin\r\n\r\n* Update project metadata\r\n\r\n* Fix CI lint job\r\n\r\n* Build wheels on CI\r\n\r\n* Change `mimalloc` to optional dependency\r\n\r\nEnabled by default.\r\n\r\n* fix clippy errors\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-06-08T09:54:54+01:00",
          "tree_id": "896b00dd95e2ff37f90e93bf28137b8e7805a5f4",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/a8d7042df471e03ca64087b7b6e6533ded24b34b"
        },
        "date": 1654678699778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55409.0363429414,
            "unit": "iter/sec",
            "range": "stddev: 5.542860656464437e-7",
            "extra": "mean: 18.047597756631816 usec\nrounds: 57147"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 33566.91287803917,
            "unit": "iter/sec",
            "range": "stddev: 7.642613967549552e-7",
            "extra": "mean: 29.791241262887787 usec\nrounds: 34365"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 255187.289782605,
            "unit": "iter/sec",
            "range": "stddev: 1.869520650607709e-7",
            "extra": "mean: 3.9186904678987102 usec\nrounds: 131597"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 936917.195705996,
            "unit": "iter/sec",
            "range": "stddev: 4.056023478080951e-8",
            "extra": "mean: 1.067330180920298 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 776848.2797704606,
            "unit": "iter/sec",
            "range": "stddev: 5.358308530974423e-8",
            "extra": "mean: 1.2872526412692764 usec\nrounds: 80000"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10509.95984531618,
            "unit": "iter/sec",
            "range": "stddev: 0.000001325223228286849",
            "extra": "mean: 95.14784211527271 usec\nrounds: 10628"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20275.501873252815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010082256779005542",
            "extra": "mean: 49.32060405958125 usec\nrounds: 20791"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3742.2875128440696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022728157543627434",
            "extra": "mean: 267.21624048602786 usec\nrounds: 3784"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6748.231900822012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018186302423010747",
            "extra": "mean: 148.1869643333076 usec\nrounds: 6841"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3008.384377143372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022970080924944757",
            "extra": "mean: 332.4043322381416 usec\nrounds: 3043"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5346.290310810537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018753331278366446",
            "extra": "mean: 187.04558523092857 usec\nrounds: 5403"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 927.3437898913975,
            "unit": "iter/sec",
            "range": "stddev: 0.000005120801304529557",
            "extra": "mean: 1.07834873204587 msec\nrounds: 933"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1822.9066904548197,
            "unit": "iter/sec",
            "range": "stddev: 0.000003559616864633661",
            "extra": "mean: 548.5744307353974 usec\nrounds: 1848"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1327.7668268891325,
            "unit": "iter/sec",
            "range": "stddev: 0.0015211780575642656",
            "extra": "mean: 753.1442868948096 usec\nrounds: 1816"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 879.0550737639638,
            "unit": "iter/sec",
            "range": "stddev: 0.001988989551263764",
            "extra": "mean: 1.1375851523365546 msec\nrounds: 1326"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32949.370797906005,
            "unit": "iter/sec",
            "range": "stddev: 8.634346056137345e-7",
            "extra": "mean: 30.34959320265842 usec\nrounds: 33899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4afcb67701bf9765bf442bd850ad3d6b2572fed",
          "message": "improving coverage (#78)\n\n* improving coverage\r\n\r\n* improving to_loc and function coverage",
          "timestamp": "2022-06-08T15:09:42+01:00",
          "tree_id": "171e18fd5953e618bc0e3d73c3845363f0026824",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/a4afcb67701bf9765bf442bd850ad3d6b2572fed"
        },
        "date": 1654697485474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 47490.01824546574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012883146343932272",
            "extra": "mean: 21.057056555152577 usec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28905.881455235834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014820035519265808",
            "extra": "mean: 34.59503566942312 usec\nrounds: 31848"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 211417.78693842815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017243557680592826",
            "extra": "mean: 4.729970994783107 usec\nrounds: 117634"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 866611.0355725328,
            "unit": "iter/sec",
            "range": "stddev: 1.827038840024979e-7",
            "extra": "mean: 1.1539202236659067 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 741514.133008035,
            "unit": "iter/sec",
            "range": "stddev: 6.917137666394715e-8",
            "extra": "mean: 1.3485919626957594 usec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9508.609003098773,
            "unit": "iter/sec",
            "range": "stddev: 0.000004512050466906279",
            "extra": "mean: 105.16785364442987 usec\nrounds: 10331"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17450.85549193271,
            "unit": "iter/sec",
            "range": "stddev: 0.000001949816194837994",
            "extra": "mean: 57.30378092135862 usec\nrounds: 19121"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3011.0326386626316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071292317785244575",
            "extra": "mean: 332.1119761903863 usec\nrounds: 3276"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5850.062775606873,
            "unit": "iter/sec",
            "range": "stddev: 0.000006243834966959953",
            "extra": "mean: 170.938336622595 usec\nrounds: 7195"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2502.9685014590727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527680174484164",
            "extra": "mean: 399.525603065745 usec\nrounds: 3066"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4483.976622429334,
            "unit": "iter/sec",
            "range": "stddev: 0.000008554539027128086",
            "extra": "mean: 223.01632773861758 usec\nrounds: 5541"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 796.6257388035033,
            "unit": "iter/sec",
            "range": "stddev: 0.000021287208505593248",
            "extra": "mean: 1.2552946148864785 msec\nrounds: 927"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1420.3251044285128,
            "unit": "iter/sec",
            "range": "stddev: 0.00001867773564847241",
            "extra": "mean: 704.0641588901321 usec\nrounds: 1693"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1125.8181936665628,
            "unit": "iter/sec",
            "range": "stddev: 0.001772403411194497",
            "extra": "mean: 888.242884708766 usec\nrounds: 1648"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 771.4874019863694,
            "unit": "iter/sec",
            "range": "stddev: 0.002382660954010357",
            "extra": "mean: 1.296197445901609 msec\nrounds: 1220"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27101.37960097393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014554689213091879",
            "extra": "mean: 36.898490583264014 usec\nrounds: 27398"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "em.jolibois@gmail.com",
            "name": "Eric Jolibois",
            "username": "PrettyWood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b10d4fc5e406a8652d45b5b1ebd18e52590fd85",
          "message": "feat: add `default_factory` (#163)\n\n* feat: add `default_factory`\r\n\r\n* we will not deepcopy default values\r\n\r\n* error message for bad default factory\r\n\r\n* bad default_factory should not raise ValidationError\r\n\r\n* tiny cleanup\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-07-15T15:28:55+01:00",
          "tree_id": "0fc2c1c6056420327cbaa570c1faea9452dde0df",
          "url": "https://github.com/PrettyWood/pydantic-core/commit/1b10d4fc5e406a8652d45b5b1ebd18e52590fd85"
        },
        "date": 1658743021966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 17033.254112910436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019927921622733963",
            "extra": "mean: 58.70868792135528 usec\nrounds: 17361"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 14159.754913188079,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027320392285925917",
            "extra": "mean: 70.6226912916849 usec\nrounds: 14389"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2267.632593874687,
            "unit": "iter/sec",
            "range": "stddev: 0.000006677577291394713",
            "extra": "mean: 440.9885458081671 usec\nrounds: 2314"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 8943.81926169434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031951524036174664",
            "extra": "mean: 111.80905726515738 usec\nrounds: 9133"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 104599.68951296252,
            "unit": "iter/sec",
            "range": "stddev: 0.000002284350064895947",
            "extra": "mean: 9.560257823481159 usec\nrounds: 107527"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 36194.343137942604,
            "unit": "iter/sec",
            "range": "stddev: 0.000001377855248384913",
            "extra": "mean: 27.628626832343258 usec\nrounds: 37313"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 561320.3442919631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013256684472219617",
            "extra": "mean: 1.7815139076443103 usec\nrounds: 57472"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2384945.4794191574,
            "unit": "iter/sec",
            "range": "stddev: 4.257539620581507e-8",
            "extra": "mean: 419.2967967735852 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1031285.7276546699,
            "unit": "iter/sec",
            "range": "stddev: 5.20216667865907e-8",
            "extra": "mean: 969.6633757105611 nsec\nrounds: 107527"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 7806356.4311205475,
            "unit": "iter/sec",
            "range": "stddev: 5.601647830117721e-9",
            "extra": "mean: 128.10073544851252 nsec\nrounds: 78741"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 10772.6342386939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032593240904685674",
            "extra": "mean: 92.82780588689535 usec\nrounds: 10906"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 465024.54369211465,
            "unit": "iter/sec",
            "range": "stddev: 6.572745044010317e-8",
            "extra": "mean: 2.1504241304349625 usec\nrounds: 46949"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 26768.22791522411,
            "unit": "iter/sec",
            "range": "stddev: 8.853753473121552e-7",
            "extra": "mean: 37.3577213690437 usec\nrounds: 27933"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6431.655891201298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024495377575605377",
            "extra": "mean: 155.4809549696262 usec\nrounds: 6440"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 26826.941462599374,
            "unit": "iter/sec",
            "range": "stddev: 8.956007365135476e-7",
            "extra": "mean: 37.275960116219146 usec\nrounds: 27856"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 10173.822588264053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017077203137323996",
            "extra": "mean: 98.29147218996559 usec\nrounds: 10428"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 4283.166398560264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034882594672692347",
            "extra": "mean: 233.47213415199988 usec\nrounds: 4316"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 25028.51853488366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010303528375856896",
            "extra": "mean: 39.95442233651359 usec\nrounds: 25707"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 7603.819409052804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026643849521540684",
            "extra": "mean: 131.5128550803613 usec\nrounds: 7687"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 7596.006778336216,
            "unit": "iter/sec",
            "range": "stddev: 0.000001899813486718864",
            "extra": "mean: 131.6481184366497 usec\nrounds: 7675"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1765.9856745467362,
            "unit": "iter/sec",
            "range": "stddev: 0.000005453683086369904",
            "extra": "mean: 566.2560089886705 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 54725.83334284615,
            "unit": "iter/sec",
            "range": "stddev: 6.289450557083429e-7",
            "extra": "mean: 18.272905845676295 usec\nrounds: 53476"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 54745.24412321372,
            "unit": "iter/sec",
            "range": "stddev: 6.534117951597742e-7",
            "extra": "mean: 18.266426901838738 usec\nrounds: 53476"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 55806.56971664437,
            "unit": "iter/sec",
            "range": "stddev: 5.997669965136208e-7",
            "extra": "mean: 17.91903722227437 usec\nrounds: 54645"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 7857538.460872894,
            "unit": "iter/sec",
            "range": "stddev: 5.326950679691451e-9",
            "extra": "mean: 127.26631946879021 nsec\nrounds: 80646"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1147066.375960614,
            "unit": "iter/sec",
            "range": "stddev: 4.967143642484727e-8",
            "extra": "mean: 871.789131786389 nsec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 811745.2549972385,
            "unit": "iter/sec",
            "range": "stddev: 5.980679283153042e-8",
            "extra": "mean: 1.2319135761420752 usec\nrounds: 82645"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7588976.352615478,
            "unit": "iter/sec",
            "range": "stddev: 5.713339693526127e-9",
            "extra": "mean: 131.77007721941322 nsec\nrounds: 75758"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2832523.958746549,
            "unit": "iter/sec",
            "range": "stddev: 2.08617071207397e-8",
            "extra": "mean: 353.04202702809977 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1074264.3177536605,
            "unit": "iter/sec",
            "range": "stddev: 1.5948195913565154e-7",
            "extra": "mean: 930.8696039452102 nsec\nrounds: 112360"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2735658.344719208,
            "unit": "iter/sec",
            "range": "stddev: 3.7522092801661687e-8",
            "extra": "mean: 365.5427228078621 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7445311.434534314,
            "unit": "iter/sec",
            "range": "stddev: 5.892544432424371e-9",
            "extra": "mean: 134.3127159681169 nsec\nrounds: 75752"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4232658.329936034,
            "unit": "iter/sec",
            "range": "stddev: 1.2299261723855244e-7",
            "extra": "mean: 236.25814371248902 nsec\nrounds: 42919"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1586041.813910073,
            "unit": "iter/sec",
            "range": "stddev: 5.2769436928026444e-8",
            "extra": "mean: 630.5004012064998 nsec\nrounds: 169492"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2845074.098065848,
            "unit": "iter/sec",
            "range": "stddev: 2.3221097521439515e-8",
            "extra": "mean: 351.4846944341062 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3178976.001945525,
            "unit": "iter/sec",
            "range": "stddev: 2.2014288249747228e-8",
            "extra": "mean: 314.5667030468242 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4099075.2285548477,
            "unit": "iter/sec",
            "range": "stddev: 7.160707306518456e-9",
            "extra": "mean: 243.9574646090205 nsec\nrounds: 41323"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3892119.7701110127,
            "unit": "iter/sec",
            "range": "stddev: 1.548947165421268e-8",
            "extra": "mean: 256.9294007032322 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3013929.834938014,
            "unit": "iter/sec",
            "range": "stddev: 2.0840290427313368e-8",
            "extra": "mean: 331.79272735808945 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3107443.638263446,
            "unit": "iter/sec",
            "range": "stddev: 2.015395278543495e-8",
            "extra": "mean: 321.80792844774106 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 741094.5132216163,
            "unit": "iter/sec",
            "range": "stddev: 6.156588766678411e-8",
            "extra": "mean: 1.34935555743465 usec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "0b2a43b8eb298034b0c569eea97b3caef1818b04",
          "message": "typo in readme",
          "timestamp": "2022-07-22T20:05:00+01:00",
          "tree_id": "1467e5a5e7b32bc26c2e962ef783c3cd22e13076",
          "url": "https://github.com/PrettyWood/pydantic-core/commit/0b2a43b8eb298034b0c569eea97b3caef1818b04"
        },
        "date": 1658743229335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 13382.983718736758,
            "unit": "iter/sec",
            "range": "stddev: 0.00002784311300470338",
            "extra": "mean: 74.72175271348172 usec\nrounds: 15848"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 11417.855723796787,
            "unit": "iter/sec",
            "range": "stddev: 0.00003927924071863816",
            "extra": "mean: 87.58211911154447 usec\nrounds: 13055"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 1721.9899910016782,
            "unit": "iter/sec",
            "range": "stddev: 0.00009815632519982475",
            "extra": "mean: 580.7234683276538 usec\nrounds: 1926"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 6998.701612712376,
            "unit": "iter/sec",
            "range": "stddev: 0.000046529412773632895",
            "extra": "mean: 142.88364547269873 usec\nrounds: 8084"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_build_schema",
            "value": 4630.149930356287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000499571778895913",
            "extra": "mean: 215.9757275771523 usec\nrounds: 5374"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 56180.52296965049,
            "unit": "iter/sec",
            "range": "stddev: 0.000019923657287190643",
            "extra": "mean: 17.799763105448736 usec\nrounds: 67110"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 29220.032349366433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000129879934706287",
            "extra": "mean: 34.22309695087256 usec\nrounds: 33223"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 478698.42523433047,
            "unit": "iter/sec",
            "range": "stddev: 0.00000216439236162254",
            "extra": "mean: 2.088997889455195 usec\nrounds: 55246"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 1911426.1290046982,
            "unit": "iter/sec",
            "range": "stddev: 9.51853852536747e-7",
            "extra": "mean: 523.1695773254772 nsec\nrounds: 169492"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 927891.1469565463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010757559397152444",
            "extra": "mean: 1.077712621011307 usec\nrounds: 107527"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 6886594.7729854295,
            "unit": "iter/sec",
            "range": "stddev: 8.971518111365561e-8",
            "extra": "mean: 145.20964757831436 nsec\nrounds: 78741"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 8261.954522319513,
            "unit": "iter/sec",
            "range": "stddev: 0.00004364664908254429",
            "extra": "mean: 121.03673498789169 usec\nrounds: 9709"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 48034.21601278209,
            "unit": "iter/sec",
            "range": "stddev: 0.00001773081583187626",
            "extra": "mean: 20.818493211878305 usec\nrounds: 53476"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 3094.0364368585233,
            "unit": "iter/sec",
            "range": "stddev: 0.00008644859318627004",
            "extra": "mean: 323.2023993276992 usec\nrounds: 3571"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 5678.278229630132,
            "unit": "iter/sec",
            "range": "stddev: 0.00005351869341919998",
            "extra": "mean: 176.10972191919828 usec\nrounds: 6419"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 2098189.2060428825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013924464180537106",
            "extra": "mean: 476.601441433195 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 2518.0199454182384,
            "unit": "iter/sec",
            "range": "stddev: 0.00007617653248508936",
            "extra": "mean: 397.1374419887297 usec\nrounds: 2896"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 4317.181179480647,
            "unit": "iter/sec",
            "range": "stddev: 0.000043074784642192136",
            "extra": "mean: 231.6326228681232 usec\nrounds: 4924"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 13523.418549135835,
            "unit": "iter/sec",
            "range": "stddev: 0.00003739932156441792",
            "extra": "mean: 73.94579975223066 usec\nrounds: 15361"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 1246.5470122904633,
            "unit": "iter/sec",
            "range": "stddev: 0.00012319307845354437",
            "extra": "mean: 802.2160336837627 usec\nrounds: 1425"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 5819.533238656306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000612477374847879",
            "extra": "mean: 171.83508693746953 usec\nrounds: 6775"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1422.9954663457,
            "unit": "iter/sec",
            "range": "stddev: 0.00017967367233970188",
            "extra": "mean: 702.7429276131381 usec\nrounds: 1713"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 3818.5306684617212,
            "unit": "iter/sec",
            "range": "stddev: 0.00009869028247226828",
            "extra": "mean: 261.88083501836735 usec\nrounds: 4649"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 671.4367395387362,
            "unit": "iter/sec",
            "range": "stddev: 0.0034988152347821782",
            "extra": "mean: 1.4893435838601565 msec\nrounds: 1264"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 26203.25642943251,
            "unit": "iter/sec",
            "range": "stddev: 0.000034657073154962276",
            "extra": "mean: 38.163195581933905 usec\nrounds: 31056"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 6509730.877434833,
            "unit": "iter/sec",
            "range": "stddev: 2.7718321924134073e-7",
            "extra": "mean: 153.61618150243615 nsec\nrounds: 77520"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 966938.1363451326,
            "unit": "iter/sec",
            "range": "stddev: 0.000002133695179183074",
            "extra": "mean: 1.034192325664449 usec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 650913.4397377004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019135683386762287",
            "extra": "mean: 1.5363025848768752 usec\nrounds: 74627"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6459845.365558772,
            "unit": "iter/sec",
            "range": "stddev: 1.6748225700504405e-7",
            "extra": "mean: 154.80246715058567 nsec\nrounds: 75188"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2301071.180421296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010577793270337404",
            "extra": "mean: 434.58021138524197 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 906918.1928391157,
            "unit": "iter/sec",
            "range": "stddev: 0.000004304289251913108",
            "extra": "mean: 1.1026352849633767 usec\nrounds: 109891"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2275452.2570878207,
            "unit": "iter/sec",
            "range": "stddev: 6.841512485595338e-7",
            "extra": "mean: 439.47307480735805 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6037173.63708923,
            "unit": "iter/sec",
            "range": "stddev: 2.0588008192549236e-7",
            "extra": "mean: 165.64042383287543 nsec\nrounds: 68966"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3600218.6300007678,
            "unit": "iter/sec",
            "range": "stddev: 1.409317974156238e-7",
            "extra": "mean: 277.76090920338277 nsec\nrounds: 40486"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1333662.7904201145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012159620360966128",
            "extra": "mean: 749.8147261684721 nsec\nrounds: 161291"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2449965.552542855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014956452201778183",
            "extra": "mean: 408.1690042384289 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2556912.450162331,
            "unit": "iter/sec",
            "range": "stddev: 5.453316579911522e-7",
            "extra": "mean: 391.09669161210235 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3415168.06442169,
            "unit": "iter/sec",
            "range": "stddev: 3.006077225779138e-7",
            "extra": "mean: 292.8113583684096 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3249587.3112292606,
            "unit": "iter/sec",
            "range": "stddev: 9.645204844364168e-7",
            "extra": "mean: 307.7313837803543 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 2678600.4906722168,
            "unit": "iter/sec",
            "range": "stddev: 4.512823903031626e-7",
            "extra": "mean: 373.3292827662559 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 2686799.904408452,
            "unit": "iter/sec",
            "range": "stddev: 4.0456657016659113e-7",
            "extra": "mean: 372.1899790003466 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 585908.1748047171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013117386735656989",
            "extra": "mean: 1.7067520867639434 usec\nrounds: 67568"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dont_raise_error",
            "value": 921983.6332182304,
            "unit": "iter/sec",
            "range": "stddev: 7.020523150036538e-7",
            "extra": "mean: 1.0846179519585715 usec\nrounds: 104167"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_value_error",
            "value": 362815.7438599498,
            "unit": "iter/sec",
            "range": "stddev: 0.000004862563067777329",
            "extra": "mean: 2.7562199737011155 usec\nrounds: 44844"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_custom",
            "value": 327639.1333303308,
            "unit": "iter/sec",
            "range": "stddev: 0.000009837178482785317",
            "extra": "mean: 3.0521384604931634 usec\nrounds: 135136"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_positional_tuple",
            "value": 1348598.9363597173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019819498762670345",
            "extra": "mean: 741.5102986059956 nsec\nrounds: 163935"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_variable_tuple",
            "value": 1340387.7820349187,
            "unit": "iter/sec",
            "range": "stddev: 0.000001661844254546082",
            "extra": "mean: 746.0527568240759 nsec\nrounds: 161291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "em.jolibois@gmail.com",
            "name": "Eric Jolibois",
            "username": "PrettyWood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c0d1631fa5cace9b6452f59c30ec98c9bceab6f7",
          "message": "Let's be gentlemen (and use `Input` instead of `Value`) (#201)\n\n* let us be gentlemen: s/must/should/g\r\n\r\n* replace Value with Input in error messages\r\n\r\n* sed was a bit too optimistic",
          "timestamp": "2022-07-31T23:49:13+01:00",
          "tree_id": "789de8f94dee3255ba8b32f4e192924874ec1b7c",
          "url": "https://github.com/PrettyWood/pydantic-core/commit/c0d1631fa5cace9b6452f59c30ec98c9bceab6f7"
        },
        "date": 1659336930143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 19452.38462539618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010706373801209608",
            "extra": "mean: 51.407579032467005 usec\nrounds: 19802"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 17621.79916148481,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012016855741976615",
            "extra": "mean: 56.74789451610911 usec\nrounds: 17889"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2480.363240266302,
            "unit": "iter/sec",
            "range": "stddev: 0.000004428390482837571",
            "extra": "mean: 403.1667554840217 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 9376.149960903696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019486220539753522",
            "extra": "mean: 106.6535842717705 usec\nrounds: 9588"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_build_schema",
            "value": 7315.254584931249,
            "unit": "iter/sec",
            "range": "stddev: 0.000002609419647515174",
            "extra": "mean: 136.70064225241154 usec\nrounds: 7441"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 74827.00266253315,
            "unit": "iter/sec",
            "range": "stddev: 4.902262729079363e-7",
            "extra": "mean: 13.364159520193008 usec\nrounds: 77520"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 38089.52067933988,
            "unit": "iter/sec",
            "range": "stddev: 6.140809234720044e-7",
            "extra": "mean: 26.253940248253357 usec\nrounds: 38911"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 714756.4909213913,
            "unit": "iter/sec",
            "range": "stddev: 3.7741995483194335e-8",
            "extra": "mean: 1.3990778855477715 usec\nrounds: 72993"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2695246.4675481822,
            "unit": "iter/sec",
            "range": "stddev: 1.659610212840022e-8",
            "extra": "mean: 371.0235824590041 nsec\nrounds: 199961"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1238172.1965281325,
            "unit": "iter/sec",
            "range": "stddev: 3.971769612823456e-8",
            "extra": "mean: 807.6421056815282 nsec\nrounds: 128206"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 8683507.00990418,
            "unit": "iter/sec",
            "range": "stddev: 3.4218073833169046e-9",
            "extra": "mean: 115.16084444446084 nsec\nrounds: 88496"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 11522.897702689663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013076322969241293",
            "extra": "mean: 86.78372626414803 usec\nrounds: 11628"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 58753.94319881527,
            "unit": "iter/sec",
            "range": "stddev: 4.273230582403449e-7",
            "extra": "mean: 17.02013423364858 usec\nrounds: 59881"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 3989.2725399089695,
            "unit": "iter/sec",
            "range": "stddev: 0.000001701541029178761",
            "extra": "mean: 250.67226919091843 usec\nrounds: 4038"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 7384.714030006878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013839961018463445",
            "extra": "mean: 135.41485776383797 usec\nrounds: 7593"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 2416372.652709627,
            "unit": "iter/sec",
            "range": "stddev: 2.163641544118033e-8",
            "extra": "mean: 413.84345203481263 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 3243.452879759914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021116562163356504",
            "extra": "mean: 308.31340459431055 usec\nrounds: 3265"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 5682.32933929654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019886199114273152",
            "extra": "mean: 175.984167810273 usec\nrounds: 5828"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 16575.31254273639,
            "unit": "iter/sec",
            "range": "stddev: 0.000001110153675755749",
            "extra": "mean: 60.33068742575347 usec\nrounds: 16892"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 1567.9879082790967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034907110811543978",
            "extra": "mean: 637.7600201633719 usec\nrounds: 1587"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 8024.706120945339,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011992487229878448",
            "extra": "mean: 124.615155362499 usec\nrounds: 8065"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1918.8745428847858,
            "unit": "iter/sec",
            "range": "stddev: 0.000004024040418354461",
            "extra": "mean: 521.1388121792612 usec\nrounds: 1938"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 5363.906273128269,
            "unit": "iter/sec",
            "range": "stddev: 0.000001964012114181751",
            "extra": "mean: 186.43129635014907 usec\nrounds: 5426"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 910.9205371100693,
            "unit": "iter/sec",
            "range": "stddev: 0.002826216557257135",
            "extra": "mean: 1.0977905967215744 msec\nrounds: 1525"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 36091.11659642137,
            "unit": "iter/sec",
            "range": "stddev: 5.924267476031967e-7",
            "extra": "mean: 27.70764925846477 usec\nrounds: 36631"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 8352921.888490736,
            "unit": "iter/sec",
            "range": "stddev: 3.4024460066999247e-9",
            "extra": "mean: 119.71858630416564 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1382423.2221202028,
            "unit": "iter/sec",
            "range": "stddev: 3.353319733241108e-8",
            "extra": "mean: 723.3674782068687 nsec\nrounds: 142858"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 872192.9297392442,
            "unit": "iter/sec",
            "range": "stddev: 3.997349232730305e-8",
            "extra": "mean: 1.1465353202294792 usec\nrounds: 88496"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7755309.496553161,
            "unit": "iter/sec",
            "range": "stddev: 3.781663042069733e-9",
            "extra": "mean: 128.94391905884282 nsec\nrounds: 79366"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 3126039.6506550773,
            "unit": "iter/sec",
            "range": "stddev: 1.3240937718954208e-8",
            "extra": "mean: 319.8935751782547 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1174421.7593332627,
            "unit": "iter/sec",
            "range": "stddev: 4.617625805649183e-8",
            "extra": "mean: 851.4828612924805 nsec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2964678.3277816246,
            "unit": "iter/sec",
            "range": "stddev: 1.3472178977413554e-8",
            "extra": "mean: 337.3047222793538 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8033907.456763446,
            "unit": "iter/sec",
            "range": "stddev: 3.9188939210648685e-9",
            "extra": "mean: 124.4724320490523 nsec\nrounds: 81968"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4688257.686239744,
            "unit": "iter/sec",
            "range": "stddev: 4.257162518025576e-9",
            "extra": "mean: 213.2988557636334 nsec\nrounds: 47394"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1780705.7871415105,
            "unit": "iter/sec",
            "range": "stddev: 3.974833057464194e-8",
            "extra": "mean: 561.5750828821048 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 3322090.621697171,
            "unit": "iter/sec",
            "range": "stddev: 1.343705147016807e-8",
            "extra": "mean: 301.01526835755084 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3366922.7602413455,
            "unit": "iter/sec",
            "range": "stddev: 1.4566655392797245e-8",
            "extra": "mean: 297.0071104113399 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4547550.367627252,
            "unit": "iter/sec",
            "range": "stddev: 4.776579697579861e-9",
            "extra": "mean: 219.89860895631475 nsec\nrounds: 45872"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4907839.555624404,
            "unit": "iter/sec",
            "range": "stddev: 4.677027865839077e-9",
            "extra": "mean: 203.7556421040698 nsec\nrounds: 50506"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 4201478.597801118,
            "unit": "iter/sec",
            "range": "stddev: 5.356339408198638e-9",
            "extra": "mean: 238.01144685666378 nsec\nrounds: 42734"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 4133982.4732853505,
            "unit": "iter/sec",
            "range": "stddev: 4.846953851993069e-9",
            "extra": "mean: 241.89749387237018 nsec\nrounds: 42017"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 841133.1415166745,
            "unit": "iter/sec",
            "range": "stddev: 3.5347511870734696e-8",
            "extra": "mean: 1.188872427731262 usec\nrounds: 86957"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dont_raise_error",
            "value": 1016133.0958053952,
            "unit": "iter/sec",
            "range": "stddev: 3.9340940687454106e-8",
            "extra": "mean: 984.1230485733903 nsec\nrounds: 104167"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_value_error",
            "value": 476753.9630833954,
            "unit": "iter/sec",
            "range": "stddev: 5.798006702853888e-8",
            "extra": "mean: 2.0975179598563045 usec\nrounds: 48781"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_custom",
            "value": 434553.7470869387,
            "unit": "iter/sec",
            "range": "stddev: 8.911811707257007e-7",
            "extra": "mean: 2.301211315524101 usec\nrounds: 45663"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_positional_tuple",
            "value": 1706226.171546902,
            "unit": "iter/sec",
            "range": "stddev: 2.7256215852005307e-8",
            "extra": "mean: 586.0887710399637 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_variable_tuple",
            "value": 1663173.3312598313,
            "unit": "iter/sec",
            "range": "stddev: 4.367625908382402e-8",
            "extra": "mean: 601.2602422148547 nsec\nrounds: 172414"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_tuple_many_variable",
            "value": 1589995.344413348,
            "unit": "iter/sec",
            "range": "stddev: 3.735191169352748e-8",
            "extra": "mean: 628.9326591526844 nsec\nrounds: 166667"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_tuple_many_positional",
            "value": 1464168.7309475443,
            "unit": "iter/sec",
            "range": "stddev: 2.6563439524163247e-8",
            "extra": "mean: 682.9813933758232 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_arguments",
            "value": 1264077.6930691584,
            "unit": "iter/sec",
            "range": "stddev: 3.169009248387863e-8",
            "extra": "mean: 791.0906153026422 nsec\nrounds: 129871"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "8f60642e2767c2b17b8d558500f0650942599ebb",
          "message": "rename full -> total on typeddicts, my original mistake",
          "timestamp": "2022-08-04T15:22:08+01:00",
          "tree_id": "3d2cf0dd579fb84578bf3cb1ef7e755c539411e3",
          "url": "https://github.com/PrettyWood/pydantic-core/commit/8f60642e2767c2b17b8d558500f0650942599ebb"
        },
        "date": 1659635535902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 19905.236070945146,
            "unit": "iter/sec",
            "range": "stddev: 0.00000497575365351765",
            "extra": "mean: 50.23803769198492 usec\nrounds: 20243"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 17899.241987328995,
            "unit": "iter/sec",
            "range": "stddev: 0.00000858552000931428",
            "extra": "mean: 55.86828764636555 usec\nrounds: 18116"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2716.579380363519,
            "unit": "iter/sec",
            "range": "stddev: 0.000004431499914280703",
            "extra": "mean: 368.1099868564066 usec\nrounds: 2739"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_isinstance",
            "value": 3771.1784170606825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024837127668500496",
            "extra": "mean: 265.16910350251106 usec\nrounds: 3826"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 9943.243569608205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016583930523799835",
            "extra": "mean: 100.57080398357407 usec\nrounds: 10091"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_build_schema",
            "value": 7468.465510059107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022230217986850703",
            "extra": "mean: 133.89631359388653 usec\nrounds: 7599"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python_fs",
            "value": 76529.00239566312,
            "unit": "iter/sec",
            "range": "stddev: 4.240637599982457e-7",
            "extra": "mean: 13.066941534529526 usec\nrounds: 80646"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python_not_fs",
            "value": 78971.7204617301,
            "unit": "iter/sec",
            "range": "stddev: 3.695115598567972e-7",
            "extra": "mean: 12.662760721853621 usec\nrounds: 83334"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json_fs",
            "value": 37499.628759797604,
            "unit": "iter/sec",
            "range": "stddev: 6.676294867133433e-7",
            "extra": "mean: 26.666930662312968 usec\nrounds: 38911"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json_not_fs",
            "value": 38125.18727247325,
            "unit": "iter/sec",
            "range": "stddev: 5.470512500562752e-7",
            "extra": "mean: 26.229379356308357 usec\nrounds: 39683"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 704205.6099090128,
            "unit": "iter/sec",
            "range": "stddev: 4.141435657395298e-8",
            "extra": "mean: 1.4200398092952555 usec\nrounds: 71943"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2496169.49923806,
            "unit": "iter/sec",
            "range": "stddev: 1.7814637156089102e-8",
            "extra": "mean: 400.6138206174351 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1034761.4150681262,
            "unit": "iter/sec",
            "range": "stddev: 3.158402204365057e-8",
            "extra": "mean: 966.4063478184725 nsec\nrounds: 106383"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 9309400.156047704,
            "unit": "iter/sec",
            "range": "stddev: 3.3596154599896467e-9",
            "extra": "mean: 107.41830657588486 nsec\nrounds: 95239"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 10507.783918863657,
            "unit": "iter/sec",
            "range": "stddev: 0.000003434863393568766",
            "extra": "mean: 95.16754510004644 usec\nrounds: 10776"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 58488.75936670849,
            "unit": "iter/sec",
            "range": "stddev: 4.4366776397296646e-7",
            "extra": "mean: 17.09730229923795 usec\nrounds: 60976"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 3834.104978619015,
            "unit": "iter/sec",
            "range": "stddev: 0.000002008625330597066",
            "extra": "mean: 260.81706306335525 usec\nrounds: 3885"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 7510.884060652843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013418136580255416",
            "extra": "mean: 133.1401193154725 usec\nrounds: 7652"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 2593330.028415783,
            "unit": "iter/sec",
            "range": "stddev: 1.9882368222675165e-8",
            "extra": "mean: 385.6046045214104 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 3144.021279462694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019395159671556523",
            "extra": "mean: 318.0640050155442 usec\nrounds: 3190"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 5875.167533571784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022010897368186896",
            "extra": "mean: 170.20791224859832 usec\nrounds: 6017"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 17497.410648259414,
            "unit": "iter/sec",
            "range": "stddev: 9.149814241546702e-7",
            "extra": "mean: 57.15131342016464 usec\nrounds: 17794"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 2497.221314229896,
            "unit": "iter/sec",
            "range": "stddev: 0.000004769657864030966",
            "extra": "mean: 400.44508442311786 usec\nrounds: 2523"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 6932.942895605791,
            "unit": "iter/sec",
            "range": "stddev: 0.000001466882164026852",
            "extra": "mean: 144.23889177477804 usec\nrounds: 6930"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1840.5129159583964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031081565667655813",
            "extra": "mean: 543.326803810707 usec\nrounds: 1942"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 5473.00883362988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018199819848558402",
            "extra": "mean: 182.71485217698196 usec\nrounds: 5581"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 850.9540552560909,
            "unit": "iter/sec",
            "range": "stddev: 0.002510177455938703",
            "extra": "mean: 1.175151577013232 msec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 35529.61018029687,
            "unit": "iter/sec",
            "range": "stddev: 5.94122734474743e-7",
            "extra": "mean: 28.14553818422008 usec\nrounds: 37175"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 8113851.450150546,
            "unit": "iter/sec",
            "range": "stddev: 3.7416719422034e-9",
            "extra": "mean: 123.24603255836809 nsec\nrounds: 84034"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1167303.024322504,
            "unit": "iter/sec",
            "range": "stddev: 3.067744324162341e-8",
            "extra": "mean: 856.6755839432407 nsec\nrounds: 117648"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 757113.4751308899,
            "unit": "iter/sec",
            "range": "stddev: 3.6882891157917794e-8",
            "extra": "mean: 1.3208059727467119 usec\nrounds: 78741"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8145194.205572252,
            "unit": "iter/sec",
            "range": "stddev: 3.5342026082480438e-9",
            "extra": "mean: 122.7717810969896 nsec\nrounds: 88496"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2976929.6783044036,
            "unit": "iter/sec",
            "range": "stddev: 1.446863596779951e-8",
            "extra": "mean: 335.91656776037075 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 990939.0620098903,
            "unit": "iter/sec",
            "range": "stddev: 1.4732047214215327e-7",
            "extra": "mean: 1.0091437892980344 usec\nrounds: 104167"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2853321.770831315,
            "unit": "iter/sec",
            "range": "stddev: 1.641853664497866e-8",
            "extra": "mean: 350.4687099169672 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8451707.569957126,
            "unit": "iter/sec",
            "range": "stddev: 3.6786854704119237e-9",
            "extra": "mean: 118.3192853896579 nsec\nrounds: 90091"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4818862.088993292,
            "unit": "iter/sec",
            "range": "stddev: 1.305828730804289e-8",
            "extra": "mean: 207.51787071966362 nsec\nrounds: 49505"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1713179.2922443259,
            "unit": "iter/sec",
            "range": "stddev: 3.293895111779353e-8",
            "extra": "mean: 583.7100673162632 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 3371201.7729971725,
            "unit": "iter/sec",
            "range": "stddev: 1.3901544960579841e-8",
            "extra": "mean: 296.63012401367394 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3260663.5113510895,
            "unit": "iter/sec",
            "range": "stddev: 1.9398553994724e-8",
            "extra": "mean: 306.68604611321126 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4621339.598516792,
            "unit": "iter/sec",
            "range": "stddev: 5.001752243818745e-9",
            "extra": "mean: 216.38747351984887 nsec\nrounds: 47394"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4577049.481480274,
            "unit": "iter/sec",
            "range": "stddev: 5.8539024095050085e-9",
            "extra": "mean: 218.48136098300597 nsec\nrounds: 47620"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3637946.7098743166,
            "unit": "iter/sec",
            "range": "stddev: 1.673702834980046e-8",
            "extra": "mean: 274.8803321624858 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3724232.428994775,
            "unit": "iter/sec",
            "range": "stddev: 1.2610095295522274e-8",
            "extra": "mean: 268.5117051809626 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 745540.4906932294,
            "unit": "iter/sec",
            "range": "stddev: 6.367877380894728e-8",
            "extra": "mean: 1.3413087719354604 usec\nrounds: 77520"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dont_raise_error",
            "value": 960777.9624986899,
            "unit": "iter/sec",
            "range": "stddev: 4.454036109710829e-8",
            "extra": "mean: 1.040823206851301 usec\nrounds: 98040"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_value_error",
            "value": 417928.4036748696,
            "unit": "iter/sec",
            "range": "stddev: 7.555212116136175e-8",
            "extra": "mean: 2.3927543359268584 usec\nrounds: 42736"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_custom",
            "value": 379424.9707458081,
            "unit": "iter/sec",
            "range": "stddev: 1.2554215337707943e-7",
            "extra": "mean: 2.6355671795516584 usec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_positional_tuple",
            "value": 1547816.733620482,
            "unit": "iter/sec",
            "range": "stddev: 3.242064187237764e-8",
            "extra": "mean: 646.0713198655659 nsec\nrounds: 156251"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_variable_tuple",
            "value": 1535203.0410536893,
            "unit": "iter/sec",
            "range": "stddev: 2.988503072617886e-8",
            "extra": "mean: 651.3796372588388 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_tuple_many_variable",
            "value": 1547533.9756363893,
            "unit": "iter/sec",
            "range": "stddev: 2.6084979124859676e-8",
            "extra": "mean: 646.189366917444 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_tuple_many_positional",
            "value": 1477145.302246133,
            "unit": "iter/sec",
            "range": "stddev: 2.8715185498538263e-8",
            "extra": "mean: 676.9814712737848 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_arguments",
            "value": 1181486.8775912155,
            "unit": "iter/sec",
            "range": "stddev: 3.3333484260392056e-8",
            "extra": "mean: 846.391118654104 nsec\nrounds: 121952"
          }
        ]
      }
    ]
  }
}