// Generated from the original, tested maths engine. Each request gets isolated state.
export function createEngine(state, session) {
const document={querySelector:()=>null,querySelectorAll:()=>[]};
const window={Hub:{},HUB_CONFIG:{}};
window.PACING = {"AA HL": [{"date": "2026-08-25", "day": "A", "activity": "Taught by previous HL teacher"}, {"date": "2026-10-09", "day": "A", "activity": "Proof by contradiction"}, {"date": "2026-10-12", "day": "B", "activity": "Proof by contradiction"}, {"date": "2026-10-13", "day": "A", "activity": "Unit 1 study guide (Canvas)"}, {"date": "2026-10-14", "day": "B", "activity": "Unit 1 study guide (Canvas)"}, {"date": "2026-10-15", "day": "A", "activity": "NO CLASS"}, {"date": "2026-10-16", "day": "B", "activity": "Finish Unit 1 study guide to stay on track with A day"}, {"date": "2026-10-19", "day": "A", "activity": "Unit 1 review"}, {"date": "2026-10-20", "day": "B", "activity": "Unit 1 review"}, {"date": "2026-10-21", "day": "A", "activity": "UNIT 1 TEST"}, {"date": "2026-10-22", "day": "B", "activity": "UNIT 1 TEST"}, {"date": "2026-10-23", "day": "A", "activity": "1.8 Proof by induction (Day 1): series"}, {"date": "2026-10-26", "day": "B", "activity": "1.8 Proof by induction (Day 1): series"}, {"date": "2026-10-27", "day": "A", "activity": "Unit 1 Test walk-through"}, {"date": "2026-10-28", "day": "B", "activity": "Unit 1 Test walk-through"}, {"date": "2026-10-29", "day": "A", "activity": "2.1 Functional relationships"}, {"date": "2026-10-30", "day": "B", "activity": "2.1 Functional relationships"}, {"date": "2026-11-04", "day": "A", "activity": "2.2 Special functions and their graphs (Day 1): quadratic, rational, radical"}, {"date": "2026-11-05", "day": "B", "activity": "2.2 Special functions and their graphs (Day 1): quadratic, rational, radical"}, {"date": "2026-11-06", "day": "A", "activity": "2.2 Special functions (Day 2): rational, absolute value, piecewise"}, {"date": "2026-11-09", "day": "B", "activity": "2.2 Special functions (Day 2): rational, absolute value, piecewise"}, {"date": "2026-11-10", "day": "A", "activity": "2.3 Classification of functions: one-to-one, odd and even"}, {"date": "2026-11-12", "day": "B", "activity": "2.3 Classification of functions: one-to-one, odd and even"}, {"date": "2026-11-13", "day": "A", "activity": "2.4 Operations with functions: composite functions"}, {"date": "2026-11-16", "day": "B", "activity": "2.4 Operations with functions: composite functions"}, {"date": "2026-11-17", "day": "A", "activity": "2.4 Operations with functions: inverse functions"}, {"date": "2026-11-18", "day": "B", "activity": "2.4 Operations with functions: inverse functions"}, {"date": "2026-11-19", "day": "A", "activity": "2.5 Function transformations (Day 1)"}, {"date": "2026-11-20", "day": "B", "activity": "2.5 Function transformations (Day 1)"}, {"date": "2026-11-23", "day": "A", "activity": "IA Lesson 1 (Checkpoint 1): what the IA is, criteria A\u2013E, choosing a topic and title"}, {"date": "2026-11-24", "day": "B", "activity": "IA Lesson 1 (Checkpoint 1): what the IA is, criteria A\u2013E, choosing a topic and title"}, {"date": "2026-11-30", "day": "A", "activity": "2.5 Function transformations (Day 2): modulus and reciprocal graphs"}, {"date": "2026-12-01", "day": "B", "activity": "2.5 Function transformations (Day 2): modulus and reciprocal graphs"}, {"date": "2026-12-02", "day": "A", "activity": "Unit 2 review and quiz"}, {"date": "2026-12-03", "day": "B", "activity": "Unit 2 review and quiz"}, {"date": "2026-12-04", "day": "A", "activity": "Unit 2 Test (Functions)"}, {"date": "2026-12-07", "day": "B", "activity": "Unit 2 Test (Functions)"}, {"date": "2026-12-08", "day": "A", "activity": "Unit 2 Test walk-through"}, {"date": "2026-12-09", "day": "B", "activity": "Unit 2 Test walk-through"}, {"date": "2026-12-10", "day": "A", "activity": "Unit 2 retest preparation; IA Checkpoint 2: final title + introduction plan due"}, {"date": "2026-12-11", "day": "B", "activity": "Unit 2 retest preparation; IA Checkpoint 2: final title + introduction plan due"}, {"date": "2026-12-14", "day": "A", "activity": "3.1 Quadratic equations and inequalities"}, {"date": "2026-12-15", "day": "B", "activity": "3.1 Quadratic equations and inequalities"}, {"date": "2026-12-16", "day": "A", "activity": "3.2 Complex numbers (Day 1): Cartesian form, arithmetic"}, {"date": "2026-12-17", "day": "B", "activity": "3.2 Complex numbers (Day 1): Cartesian form, arithmetic"}, {"date": "2026-12-18", "day": "A", "activity": "3.2 Complex numbers (Day 2): conjugates, complex roots of quadratics"}, {"date": "2027-01-04", "day": "B", "activity": "3.2 Complex numbers (Day 2): conjugates, complex roots of quadratics"}, {"date": "2027-01-05", "day": "A", "activity": "3.3 Polynomial equations: factor and remainder theorems"}, {"date": "2027-01-06", "day": "B", "activity": "3.3 Polynomial equations: factor and remainder theorems"}, {"date": "2027-01-07", "day": "A", "activity": "3.4 The fundamental theorem of algebra; sum and product of roots"}, {"date": "2027-01-08", "day": "B", "activity": "3.4 The fundamental theorem of algebra; sum and product of roots"}, {"date": "2027-01-11", "day": "A", "activity": "IA Checkpoint 3: research question and outline"}, {"date": "2027-01-12", "day": "B", "activity": "IA Checkpoint 3: research question and outline"}, {"date": "2027-01-13", "day": "A", "activity": "Semester exam review"}, {"date": "2027-01-14", "day": "B", "activity": "Semester Exams"}, {"date": "2027-01-15", "day": "A", "activity": "Semester Exams"}, {"date": "2027-01-19", "day": "B", "activity": "Semester Exams"}, {"date": "2027-01-20", "day": "A", "activity": "Semester Exams"}, {"date": "2027-01-21", "day": "B", "activity": "Exam Make-Ups"}, {"date": "2027-01-25", "day": "A", "activity": "3.5 Solving equations and inequalities (NumWorks)"}, {"date": "2027-01-26", "day": "B", "activity": "3.5 Solving equations and inequalities (NumWorks)"}, {"date": "2027-01-27", "day": "A", "activity": "3.6 Systems of linear equations (Day 1)"}, {"date": "2027-01-28", "day": "B", "activity": "3.6 Systems of linear equations (Day 1)"}, {"date": "2027-01-29", "day": "A", "activity": "3.6 Systems of linear equations (Day 2): no / infinite solutions"}, {"date": "2027-02-01", "day": "B", "activity": "3.6 Systems of linear equations (Day 2): no / infinite solutions"}, {"date": "2027-02-02", "day": "A", "activity": "Unit 3 review and quiz"}, {"date": "2027-02-03", "day": "B", "activity": "Unit 3 review and quiz"}, {"date": "2027-02-04", "day": "A", "activity": "Unit 3 review: exam-style questions"}, {"date": "2027-02-05", "day": "B", "activity": "Unit 3 review: exam-style questions"}, {"date": "2027-02-08", "day": "A", "activity": "Unit 3 Test (Complex numbers and algebra)"}, {"date": "2027-02-09", "day": "B", "activity": "Unit 3 Test (Complex numbers and algebra)"}, {"date": "2027-02-10", "day": "A", "activity": "4.1 Limits, continuity and convergence (Day 1)"}, {"date": "2027-02-11", "day": "B", "activity": "4.1 Limits, continuity and convergence (Day 1)"}, {"date": "2027-02-12", "day": "A", "activity": "4.1 Limits (Day 2): convergence, L\u2019H\u00f4pital preview"}, {"date": "2027-02-16", "day": "B", "activity": "4.1 Limits (Day 2): convergence, L\u2019H\u00f4pital preview"}, {"date": "2027-02-17", "day": "A", "activity": "4.2 The derivative from first principles"}, {"date": "2027-02-18", "day": "B", "activity": "4.2 The derivative from first principles"}, {"date": "2027-02-19", "day": "A", "activity": "4.2 Tangents and normals"}, {"date": "2027-02-22", "day": "B", "activity": "4.2 Tangents and normals"}, {"date": "2027-02-23", "day": "A", "activity": "4.3 Differentiation rules: chain, product and quotient"}, {"date": "2027-02-24", "day": "B", "activity": "4.3 Differentiation rules: chain, product and quotient"}, {"date": "2027-02-25", "day": "A", "activity": "4.3 Differentiation rules (Day 2): mixed chain, product and quotient practice"}, {"date": "2027-02-26", "day": "B", "activity": "4.3 Differentiation rules (Day 2): mixed chain, product and quotient practice"}, {"date": "2027-03-01", "day": "A", "activity": "Quiz: limits and differentiation rules (4.1\u20134.3)"}, {"date": "2027-03-02", "day": "B", "activity": "Quiz: limits and differentiation rules (4.1\u20134.3)"}, {"date": "2027-03-03", "day": "A", "activity": "4.4 Graphical interpretation: first derivative"}, {"date": "2027-03-04", "day": "B", "activity": "4.4 Graphical interpretation: first derivative"}, {"date": "2027-03-05", "day": "A", "activity": "4.4 Second derivative, concavity, points of inflection"}, {"date": "2027-03-08", "day": "B", "activity": "4.4 Second derivative, concavity, points of inflection"}, {"date": "2027-03-09", "day": "A", "activity": "IA Checkpoint 4: introduction paragraph draft due"}, {"date": "2027-03-10", "day": "B", "activity": "IA Checkpoint 4: introduction paragraph draft due"}, {"date": "2027-03-11", "day": "A", "activity": "4.5 Applications: optimization"}, {"date": "2027-03-12", "day": "B", "activity": "4.5 Applications: optimization"}, {"date": "2027-03-15", "day": "A", "activity": "4.5 Optimization (Day 2): exam-style problems"}, {"date": "2027-03-16", "day": "B", "activity": "4.5 Optimization (Day 2): exam-style problems"}, {"date": "2027-03-17", "day": "A", "activity": "4.5 Applications: kinematics"}, {"date": "2027-03-18", "day": "B", "activity": "4.5 Applications: kinematics"}, {"date": "2027-03-19", "day": "A", "activity": "IA Checkpoint 5: introduction peer review"}, {"date": "2027-03-22", "day": "B", "activity": "IA Checkpoint 5: introduction peer review"}, {"date": "2027-03-23", "day": "A", "activity": "4.6 Implicit differentiation"}, {"date": "2027-03-24", "day": "B", "activity": "4.6 Implicit differentiation"}, {"date": "2027-04-05", "day": "A", "activity": "4.6 Related rates"}, {"date": "2027-04-06", "day": "B", "activity": "4.6 Related rates"}, {"date": "2027-04-07", "day": "A", "activity": "IA Checkpoint 6: final introduction paragraph due"}, {"date": "2027-04-08", "day": "B", "activity": "IA Checkpoint 6: final introduction paragraph due"}, {"date": "2027-04-09", "day": "A", "activity": "Unit 4 review"}, {"date": "2027-04-12", "day": "B", "activity": "Unit 4 review"}, {"date": "2027-04-13", "day": "A", "activity": "Unit 4 Test (Differentiation)"}, {"date": "2027-04-14", "day": "B", "activity": "Unit 4 Test (Differentiation)"}, {"date": "2027-04-15", "day": "A", "activity": "5.1 Sampling"}, {"date": "2027-04-16", "day": "B", "activity": "5.1 Sampling"}, {"date": "2027-04-19", "day": "A", "activity": "5.2 Descriptive statistics (Day 1): central tendency, presenting data"}, {"date": "2027-04-20", "day": "B", "activity": "5.2 Descriptive statistics (Day 1): central tendency, presenting data"}, {"date": "2027-04-21", "day": "A", "activity": "5.2 Descriptive statistics (Day 2): dispersion, outliers (NumWorks)"}, {"date": "2027-04-22", "day": "B", "activity": "5.2 Descriptive statistics (Day 2): dispersion, outliers (NumWorks)"}, {"date": "2027-04-23", "day": "A", "activity": "5.3 The justification of statistical techniques"}, {"date": "2027-04-26", "day": "B", "activity": "5.3 The justification of statistical techniques"}, {"date": "2027-04-27", "day": "A", "activity": "5.4 Correlation, causation and linear regression (NumWorks)"}, {"date": "2027-04-28", "day": "B", "activity": "5.4 Correlation, causation and linear regression (NumWorks)"}, {"date": "2027-04-29", "day": "A", "activity": "Unit 5 review and quiz"}, {"date": "2027-04-30", "day": "B", "activity": "Unit 5 review and quiz"}, {"date": "2027-05-03", "day": "A", "activity": "Unit 5 review: exam-style questions"}, {"date": "2027-05-04", "day": "B", "activity": "Unit 5 review: exam-style questions"}, {"date": "2027-05-05", "day": "A", "activity": "Unit 5 Test (Statistics)"}, {"date": "2027-05-06", "day": "B", "activity": "Unit 5 Test (Statistics)"}, {"date": "2027-05-07", "day": "A", "activity": "IA work session: maths plan and data for the exploration"}, {"date": "2027-05-10", "day": "B", "activity": "IA work session: maths plan and data for the exploration"}, {"date": "2027-05-11", "day": "A", "activity": "Exam skills: command terms, markschemes, M/A/R marks"}, {"date": "2027-05-12", "day": "B", "activity": "Exam skills: command terms, markschemes, M/A/R marks"}, {"date": "2027-05-13", "day": "A", "activity": "End-of-year review: Paper 1 practice (no calculator)"}, {"date": "2027-05-14", "day": "B", "activity": "End-of-year review: Paper 1 practice (no calculator)"}, {"date": "2027-05-17", "day": "A", "activity": "IA year 1 checkpoint: exploration plan submitted for feedback"}, {"date": "2027-05-18", "day": "B", "activity": "IA year 1 checkpoint: exploration plan submitted for feedback"}, {"date": "2027-05-19", "day": "A", "activity": "End-of-year review: Paper 2 practice (NumWorks)"}, {"date": "2027-05-20", "day": "B", "activity": "End-of-year review: Paper 2 practice (NumWorks)"}, {"date": "2027-05-21", "day": "A", "activity": "End-of-year review: Paper 3 practice (HL extended problem)"}, {"date": "2027-05-24", "day": "B", "activity": "End-of-year review: Paper 3 practice (HL extended problem)"}, {"date": "2027-05-25", "day": "A", "activity": "Mixed exam-style practice (Units 1\u20135)"}, {"date": "2027-05-26", "day": "B", "activity": "Mixed exam-style practice (Units 1\u20135)"}, {"date": "2027-05-27", "day": "A", "activity": "Exam review: targeted reteach from practice papers"}, {"date": "2027-05-28", "day": "B", "activity": "Exam review: targeted reteach from practice papers"}, {"date": "2027-06-01", "day": "A", "activity": "End-of-Year Exam (Paper 1, 2 and 3 style)"}, {"date": "2027-06-02", "day": "B", "activity": "End-of-Year Exam (Paper 1, 2 and 3 style)"}, {"date": "2027-06-03", "day": "A", "activity": "Exam feedback and corrections"}, {"date": "2027-06-04", "day": "B", "activity": "Exam feedback and corrections"}, {"date": "2027-06-07", "day": "A", "activity": "Year 1 reflection; Year 2 preview"}, {"date": "2027-06-08", "day": "B", "activity": "Year 1 reflection; Year 2 preview"}, {"date": "2027-06-09", "day": "A", "activity": "Last day: Year 1 wrap-up"}], "AA SL": [{"date": "2026-08-25", "day": "A", "activity": "Welcome and Start Algebra Review"}, {"date": "2026-08-26", "day": "B", "activity": "Welcome and Start Algebra Review"}, {"date": "2026-08-27", "day": "A", "activity": "Work on PreReq Skills (Due Friday 9/11)"}, {"date": "2026-08-28", "day": "B", "activity": "Work on PreReq Skills (Due Mon 9/14)"}, {"date": "2026-08-31", "day": "A", "activity": "Number Systems and Rounding"}, {"date": "2026-09-01", "day": "B", "activity": "Number Systems and Rounding"}, {"date": "2026-09-02", "day": "A", "activity": "Number Systems and Rounding"}, {"date": "2026-09-03", "day": "B", "activity": "Number Systems and Rounding"}, {"date": "2026-09-04", "day": "A", "activity": "1.1 Number Patterns and Sigma Notation Day 1"}, {"date": "2026-09-08", "day": "B", "activity": "1.1 Number Patterns and Sigma Notation Day 1"}, {"date": "2026-09-09", "day": "A", "activity": "1.1 Number Patterns and Sigma Notation Day 2"}, {"date": "2026-09-10", "day": "B", "activity": "1.1 Number Patterns and Sigma Notation Day 2"}, {"date": "2026-09-11", "day": "A", "activity": "Pre Req Skills Packet Due; PreReq Quiz; Start 1.2"}, {"date": "2026-09-14", "day": "B", "activity": "Pre Req Skills Packet Due; PreReq Quiz; Start 1.2"}, {"date": "2026-09-15", "day": "A", "activity": "1.2 Arithmetic and Geometric Sequences Day 1"}, {"date": "2026-09-16", "day": "B", "activity": "1.2 Arithmetic and Geometric Sequences Day 1"}, {"date": "2026-09-17", "day": "A", "activity": "1.2 Arithmetic and Geometric Sequences Day 2"}, {"date": "2026-09-18", "day": "B", "activity": "1.2 Arithmetic and Geometric Sequences Day 2"}, {"date": "2026-09-22", "day": "A", "activity": "1.3 Arithmetic and Geometric Series Day 1"}, {"date": "2026-09-23", "day": "B", "activity": "1.3 Arithmetic and Geometric Series Day 1"}, {"date": "2026-09-24", "day": "A", "activity": "1.3 Arithmetic and Geometric Series Day 2; Arithmetic and Geometric Sequence Quiz"}, {"date": "2026-09-25", "day": "B", "activity": "1.3 Arithmetic and Geometric Series Day 2; Arithmetic and Geometric Sequence Quiz"}, {"date": "2026-09-28", "day": "A", "activity": "Finished 1.3 and completed book questions"}, {"date": "2026-09-29", "day": "B", "activity": "Finished 1.3 and completed book questions"}, {"date": "2026-09-30", "day": "A", "activity": "SUB: Delta Math work on Sequences and Series"}, {"date": "2026-10-01", "day": "B", "activity": "Delta Math work on Sequences and Series"}, {"date": "2026-10-05", "day": "A", "activity": "1.4 Applications of Arithmetic and Geometric Sequences and Series"}, {"date": "2026-10-06", "day": "B", "activity": "1.4 Applications of Arithmetic and Geometric Sequences and Series"}, {"date": "2026-10-07", "day": "A", "activity": "1.4 Classwork"}, {"date": "2026-10-08", "day": "B", "activity": "1.4 Classwork"}, {"date": "2026-10-09", "day": "A", "activity": "Unit 1 review worksheet (sub day)"}, {"date": "2026-10-12", "day": "B", "activity": "Unit 1 review worksheet (same as A day)"}, {"date": "2026-10-13", "day": "A", "activity": "Unit 1 review assignment (Canvas)"}, {"date": "2026-10-14", "day": "B", "activity": "Unit 1 review assignment (Canvas)"}, {"date": "2026-10-15", "day": "A", "activity": "NO CLASS"}, {"date": "2026-10-16", "day": "B", "activity": "Unit 1 review assignment (Canvas)"}, {"date": "2026-10-19", "day": "A", "activity": "Unit 1 review: rounding, 1.1\u20131.4"}, {"date": "2026-10-20", "day": "B", "activity": "Unit 1 review: rounding, 1.1\u20131.4"}, {"date": "2026-10-21", "day": "A", "activity": "1.5 The binomial theorem (Day 1): Pascal\u2019s triangle, binomial coefficients"}, {"date": "2026-10-22", "day": "B", "activity": "1.5 The binomial theorem (Day 1): Pascal\u2019s triangle, binomial coefficients"}, {"date": "2026-10-23", "day": "A", "activity": "1.5 The binomial theorem (Day 2): general term; Canvas mock test (open notes, extra credit)"}, {"date": "2026-10-26", "day": "B", "activity": "1.5 The binomial theorem (Day 2): general term; Unit 1 review"}, {"date": "2026-10-27", "day": "A", "activity": "Unit 1 Test (rounding, sequences and series 1.1\u20131.4)"}, {"date": "2026-10-28", "day": "B", "activity": "Unit 1 Test (rounding, sequences and series 1.1\u20131.4)"}, {"date": "2026-10-29", "day": "A", "activity": "Unit 1 Test walk-through; 1.5 The binomial theorem (Day 2, part 1): general term, Examples 31\u201332"}, {"date": "2026-10-30", "day": "B", "activity": "Unit 1 Test walk-through; 1.5 The binomial theorem (Day 2, part 1): general term, Examples 31\u201332"}, {"date": "2026-11-04", "day": "A", "activity": "1.5 The binomial theorem (Day 2, continued): working backwards, finding a power of x, estimating"}, {"date": "2026-11-05", "day": "B", "activity": "1.5 The binomial theorem (Day 2, continued): working backwards, finding a power of x, estimating"}, {"date": "2026-11-06", "day": "A", "activity": "1.6 Proofs: simple deductive proof, LHS to RHS"}, {"date": "2026-11-09", "day": "B", "activity": "1.6 Proofs: simple deductive proof, LHS to RHS"}, {"date": "2026-11-10", "day": "A", "activity": "1.5\u20131.6 quiz; 2.1 What is a function?"}, {"date": "2026-11-12", "day": "B", "activity": "1.5\u20131.6 quiz; 2.1 What is a function?"}, {"date": "2026-11-13", "day": "A", "activity": "2.2 Functional notation and 2.3 Drawing graphs of functions"}, {"date": "2026-11-16", "day": "B", "activity": "2.2 Functional notation and 2.3 Drawing graphs of functions"}, {"date": "2026-11-17", "day": "A", "activity": "2.4 The domain and range of a function"}, {"date": "2026-11-18", "day": "B", "activity": "2.4 The domain and range of a function"}, {"date": "2026-11-19", "day": "A", "activity": "2.5 Composite functions"}, {"date": "2026-11-20", "day": "B", "activity": "2.5 Composite functions"}, {"date": "2026-11-23", "day": "A", "activity": "IA Lesson 1 (Checkpoint 1): what the IA is, criteria A\u2013E, choosing a topic and title"}, {"date": "2026-11-24", "day": "B", "activity": "IA Lesson 1 (Checkpoint 1): what the IA is, criteria A\u2013E, choosing a topic and title"}, {"date": "2026-11-30", "day": "A", "activity": "2.6 Inverse functions + Unit 2 review"}, {"date": "2026-12-01", "day": "B", "activity": "2.6 Inverse functions + Unit 2 review"}, {"date": "2026-12-02", "day": "A", "activity": "Unit 2 Test (Introducing functions)"}, {"date": "2026-12-03", "day": "B", "activity": "Unit 2 Test (Introducing functions)"}, {"date": "2026-12-04", "day": "A", "activity": "3.1 Gradient of a linear function and 3.2 Linear functions"}, {"date": "2026-12-07", "day": "B", "activity": "3.1 Gradient of a linear function and 3.2 Linear functions"}, {"date": "2026-12-08", "day": "A", "activity": "3.2 Linear functions (Day 2): parallel, perpendicular, modelling"}, {"date": "2026-12-09", "day": "B", "activity": "3.2 Linear functions (Day 2): parallel, perpendicular, modelling"}, {"date": "2026-12-10", "day": "A", "activity": "3.3 Transformations of functions; IA Checkpoint 2: final title + introduction plan due"}, {"date": "2026-12-11", "day": "B", "activity": "3.3 Transformations of functions; IA Checkpoint 2: final title + introduction plan due"}, {"date": "2026-12-14", "day": "A", "activity": "3.4 Graphing quadratic functions"}, {"date": "2026-12-15", "day": "B", "activity": "3.4 Graphing quadratic functions"}, {"date": "2026-12-16", "day": "A", "activity": "3.5 Solving quadratic equations by factorization"}, {"date": "2026-12-17", "day": "B", "activity": "3.5 Solving quadratic equations by factorization"}, {"date": "2026-12-18", "day": "A", "activity": "3.6 The quadratic formula and the discriminant"}, {"date": "2027-01-04", "day": "B", "activity": "3.6 The quadratic formula and the discriminant"}, {"date": "2027-01-05", "day": "A", "activity": "3.7 Applications of quadratics; Unit 3 review"}, {"date": "2027-01-06", "day": "B", "activity": "3.7 Applications of quadratics; Unit 3 review"}, {"date": "2027-01-07", "day": "A", "activity": "Unit 3 Test (Linear and quadratic functions)"}, {"date": "2027-01-08", "day": "B", "activity": "Unit 3 Test (Linear and quadratic functions)"}, {"date": "2027-01-11", "day": "A", "activity": "IA Checkpoint 3: research question and outline"}, {"date": "2027-01-12", "day": "B", "activity": "IA Checkpoint 3: research question and outline"}, {"date": "2027-01-13", "day": "A", "activity": "Semester exam review"}, {"date": "2027-01-14", "day": "B", "activity": "Semester Exams"}, {"date": "2027-01-15", "day": "A", "activity": "Semester Exams"}, {"date": "2027-01-19", "day": "B", "activity": "Semester Exams"}, {"date": "2027-01-20", "day": "A", "activity": "Semester Exams"}, {"date": "2027-01-21", "day": "B", "activity": "Exam Make-Ups"}, {"date": "2027-01-25", "day": "A", "activity": "4.1 The reciprocal function (Day 1)"}, {"date": "2027-01-26", "day": "B", "activity": "4.1 The reciprocal function (Day 1)"}, {"date": "2027-01-27", "day": "A", "activity": "4.1 The reciprocal function (Day 2): asymptotes, domain and range"}, {"date": "2027-01-28", "day": "B", "activity": "4.1 The reciprocal function (Day 2): asymptotes, domain and range"}, {"date": "2027-01-29", "day": "A", "activity": "4.2 Transforming the reciprocal function"}, {"date": "2027-02-01", "day": "B", "activity": "4.2 Transforming the reciprocal function"}, {"date": "2027-02-02", "day": "A", "activity": "4.3 Rational functions of the form (ax + b) over (cx + d) (Day 1)"}, {"date": "2027-02-03", "day": "B", "activity": "4.3 Rational functions of the form (ax + b) over (cx + d) (Day 1)"}, {"date": "2027-02-04", "day": "A", "activity": "4.3 Rational functions (Day 2): sketching with the GDC, applications"}, {"date": "2027-02-05", "day": "B", "activity": "4.3 Rational functions (Day 2): sketching with the GDC, applications"}, {"date": "2027-02-08", "day": "A", "activity": "Unit 4 review and quiz"}, {"date": "2027-02-09", "day": "B", "activity": "Unit 4 review and quiz"}, {"date": "2027-02-10", "day": "A", "activity": "Unit 4 Test (Rational functions)"}, {"date": "2027-02-11", "day": "B", "activity": "Unit 4 Test (Rational functions)"}, {"date": "2027-02-12", "day": "A", "activity": "5.1 Limits and convergence (Day 1)"}, {"date": "2027-02-16", "day": "B", "activity": "5.1 Limits and convergence (Day 1)"}, {"date": "2027-02-17", "day": "A", "activity": "5.1 Limits and convergence (Day 2): limits of sequences and functions"}, {"date": "2027-02-18", "day": "B", "activity": "5.1 Limits and convergence (Day 2): limits of sequences and functions"}, {"date": "2027-02-19", "day": "A", "activity": "5.2 The derivative function: first principles"}, {"date": "2027-02-22", "day": "B", "activity": "5.2 The derivative function: first principles"}, {"date": "2027-02-23", "day": "A", "activity": "5.2 Tangents and normals"}, {"date": "2027-02-24", "day": "B", "activity": "5.2 Tangents and normals"}, {"date": "2027-02-25", "day": "A", "activity": "5.3 Differentiation rules"}, {"date": "2027-02-26", "day": "B", "activity": "5.3 Differentiation rules"}, {"date": "2027-03-01", "day": "A", "activity": "5.3 Differentiation rules: mixed practice; quiz"}, {"date": "2027-03-02", "day": "B", "activity": "5.3 Differentiation rules: mixed practice; quiz"}, {"date": "2027-03-03", "day": "A", "activity": "5.4 Graphical interpretation of first and second derivatives"}, {"date": "2027-03-04", "day": "B", "activity": "5.4 Graphical interpretation of first and second derivatives"}, {"date": "2027-03-05", "day": "A", "activity": "5.4 Concavity, points of inflection, curve sketching"}, {"date": "2027-03-08", "day": "B", "activity": "5.4 Concavity, points of inflection, curve sketching"}, {"date": "2027-03-09", "day": "A", "activity": "IA Checkpoint 4: introduction paragraph draft due"}, {"date": "2027-03-10", "day": "B", "activity": "IA Checkpoint 4: introduction paragraph draft due"}, {"date": "2027-03-11", "day": "A", "activity": "5.5 Optimization"}, {"date": "2027-03-12", "day": "B", "activity": "5.5 Optimization"}, {"date": "2027-03-15", "day": "A", "activity": "5.5 Optimization (Day 2): contexts"}, {"date": "2027-03-16", "day": "B", "activity": "5.5 Optimization (Day 2): contexts"}, {"date": "2027-03-17", "day": "A", "activity": "5.5 Kinematics"}, {"date": "2027-03-18", "day": "B", "activity": "5.5 Kinematics"}, {"date": "2027-03-19", "day": "A", "activity": "IA Checkpoint 5: introduction peer review"}, {"date": "2027-03-22", "day": "B", "activity": "IA Checkpoint 5: introduction peer review"}, {"date": "2027-03-23", "day": "A", "activity": "Unit 5 review"}, {"date": "2027-03-24", "day": "B", "activity": "Unit 5 review"}, {"date": "2027-04-05", "day": "A", "activity": "Unit 5 Test (Differentiation)"}, {"date": "2027-04-06", "day": "B", "activity": "Unit 5 Test (Differentiation)"}, {"date": "2027-04-07", "day": "A", "activity": "IA Checkpoint 6: final introduction paragraph due"}, {"date": "2027-04-08", "day": "B", "activity": "IA Checkpoint 6: final introduction paragraph due"}, {"date": "2027-04-09", "day": "A", "activity": "6.1 Sampling"}, {"date": "2027-04-12", "day": "B", "activity": "6.1 Sampling"}, {"date": "2027-04-13", "day": "A", "activity": "6.2 Presentation of data"}, {"date": "2027-04-14", "day": "B", "activity": "6.2 Presentation of data"}, {"date": "2027-04-15", "day": "A", "activity": "6.3 Measures of central tendency"}, {"date": "2027-04-16", "day": "B", "activity": "6.3 Measures of central tendency"}, {"date": "2027-04-19", "day": "A", "activity": "6.4 Measures of dispersion: quartiles, box plots, outliers"}, {"date": "2027-04-20", "day": "B", "activity": "6.4 Measures of dispersion: quartiles, box plots, outliers"}, {"date": "2027-04-21", "day": "A", "activity": "6.4 Variance and standard deviation (GDC)"}, {"date": "2027-04-22", "day": "B", "activity": "6.4 Variance and standard deviation (GDC)"}, {"date": "2027-04-23", "day": "A", "activity": "Unit 6 review and quiz"}, {"date": "2027-04-26", "day": "B", "activity": "Unit 6 review and quiz"}, {"date": "2027-04-27", "day": "A", "activity": "7.1 Scatter diagrams and 7.2 Measuring correlation"}, {"date": "2027-04-28", "day": "B", "activity": "7.1 Scatter diagrams and 7.2 Measuring correlation"}, {"date": "2027-04-29", "day": "A", "activity": "7.3 The line of best fit"}, {"date": "2027-04-30", "day": "B", "activity": "7.3 The line of best fit"}, {"date": "2027-05-03", "day": "A", "activity": "7.4 Least squares regression (GDC)"}, {"date": "2027-05-04", "day": "B", "activity": "7.4 Least squares regression (GDC)"}, {"date": "2027-05-05", "day": "A", "activity": "7.4 Regression lines: predictions and when not to trust them"}, {"date": "2027-05-06", "day": "B", "activity": "7.4 Regression lines: predictions and when not to trust them"}, {"date": "2027-05-07", "day": "A", "activity": "Unit 6\u20137 review"}, {"date": "2027-05-10", "day": "B", "activity": "Unit 6\u20137 review"}, {"date": "2027-05-11", "day": "A", "activity": "Unit 6\u20137 Test (Statistics)"}, {"date": "2027-05-12", "day": "B", "activity": "Unit 6\u20137 Test (Statistics)"}, {"date": "2027-05-13", "day": "A", "activity": "IA work session: maths plan and data for the exploration"}, {"date": "2027-05-14", "day": "B", "activity": "IA work session: maths plan and data for the exploration"}, {"date": "2027-05-17", "day": "A", "activity": "IA year 1 checkpoint: exploration plan submitted for feedback"}, {"date": "2027-05-18", "day": "B", "activity": "IA year 1 checkpoint: exploration plan submitted for feedback"}, {"date": "2027-05-19", "day": "A", "activity": "Exam skills: command terms, markschemes, M/A/R marks"}, {"date": "2027-05-20", "day": "B", "activity": "Exam skills: command terms, markschemes, M/A/R marks"}, {"date": "2027-05-21", "day": "A", "activity": "End-of-year review: Paper 1 practice (no GDC)"}, {"date": "2027-05-24", "day": "B", "activity": "End-of-year review: Paper 1 practice (no GDC)"}, {"date": "2027-05-25", "day": "A", "activity": "End-of-year review: Paper 2 practice (GDC)"}, {"date": "2027-05-26", "day": "B", "activity": "End-of-year review: Paper 2 practice (GDC)"}, {"date": "2027-05-27", "day": "A", "activity": "Mixed exam-style practice (Units 1\u20137)"}, {"date": "2027-05-28", "day": "B", "activity": "Mixed exam-style practice (Units 1\u20137)"}, {"date": "2027-06-01", "day": "A", "activity": "End-of-Year Exam (Paper 1 and Paper 2 style)"}, {"date": "2027-06-02", "day": "B", "activity": "End-of-Year Exam (Paper 1 and Paper 2 style)"}, {"date": "2027-06-03", "day": "A", "activity": "Exam feedback and corrections"}, {"date": "2027-06-04", "day": "B", "activity": "Exam feedback and corrections"}, {"date": "2027-06-07", "day": "A", "activity": "Year 1 reflection; Year 2 preview"}, {"date": "2027-06-08", "day": "B", "activity": "Year 1 reflection; Year 2 preview"}, {"date": "2027-06-09", "day": "A", "activity": "Last day: Year 1 wrap-up"}]};
/* Core helpers: DOM, formatting, dates, ids, toasts, save status. */
(function (Hub) {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s), $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const uid = (p = 'id') => p + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  const todayISO = () => new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parseISO = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  /** "Wed 4 Nov" — British order. */
  const fmtDate = (s, long) => { if (!s) return '—'; const d = parseISO(s.slice(0, 10)); return `${(long ? DAYS : DAYS.map(x => x.slice(0, 3)))[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`; };
  const fmtDateTime = iso => { if (!iso) return '—'; const d = new Date(iso); return `${d.getDate()} ${MONTHS[d.getMonth()]}, ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; };
  const daysBetween = (a, b) => Math.round((parseISO(b) - parseISO(a)) / 86400000);
  const addDays = (s, n) => { const d = parseISO(s); d.setDate(d.getDate() + n); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
  const pct = (e, m) => (m > 0 ? Math.round(100 * e / m) : null);
  const initials = name => name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  let toastTimer;
  function toast(msg, kind = 'info') {
    const t = $('#toast'); if (!t) return;
    t.textContent = msg; t.className = 'toast show ' + kind; clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (t.className = 'toast'), 4200);
  }
  function saveStatus(text, kind = 'ok') { const el = $('#save-status'); if (el) { el.textContent = text; el.dataset.kind = kind; } }
  const HOST = (window.HUB_CONFIG && window.HUB_CONFIG.host) || 'web';
  Hub.LOGO = (window.HUB_CONFIG && window.HUB_CONFIG.logo) || 'assets/wolf.png';
  Hub.HOST = HOST;
  function download(name, content, type = 'application/json') {
    if (HOST === 'artifact' && typeof content === 'string' && Hub.ui) { // file downloads are blocked inside the claude.ai preview frame
      const m = Hub.ui.modal(`<h2 class="modal-title">${esc(name)}</h2><p class="small">Downloads are blocked in this preview. Copy the text below into a file (or open the hosted Hub to download).</p><textarea id="dl-text" rows="12" readonly>${esc(content)}</textarea><div class="actions"><button class="btn primary" id="dl-copy">Copy</button></div>`, { wide: true });
      m.el.querySelector('#dl-copy').onclick = async () => { try { await navigator.clipboard.writeText(content); toast('Copied.'); } catch (e) { const t = m.el.querySelector('#dl-text'); t.focus(); t.select(); toast('Select all and copy.'); } };
      return;
    }
    const blob = content instanceof Blob ? content : new Blob([content], { type }); const u = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 1500);
  }
  const csvCell = v => { const raw = String(v ?? ''); const s = /^[\s]*[=+@-]/.test(raw) ? "'" + raw : raw; return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const toCSV = rows => rows.map(r => r.map(csvCell).join(',')).join('\n');
  const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

  Hub.core = { $, $$, esc, uid, todayISO, fmtDate, fmtDateTime, daysBetween, addDays, pct, initials, hashStr, toast, saveStatus, download, toCSV, debounce, parseISO };
})(window.Hub = window.Hub || {});

/* Miss Badmus' IB Math Hub — maths rendering and answer checking.
   - Hub.math.render(text): text with $...$ (inline) or $$...$$ (display) TeX-subset → native MathML.
     Fractions are always stacked (mfrac). No external library; works offline and on Chromebooks.
   - Hub.math.parse(input): student's typed answer → {value, ast} using a safe parser (no eval).
   - Hub.math.check(answerSpec, response): auto-marking with exact / 3 s.f. / d.p. rules. */
(function (Hub) {
  'use strict';
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- TeX subset → MathML ---------- */
  const SYM = {
    alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', theta: 'θ', lambda: 'λ', mu: 'μ', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', phi: 'φ', omega: 'ω',
    Delta: 'Δ', Sigma: 'Σ', Omega: 'Ω', Pi: 'Π'
  };
  const OPS = {
    times: '×', cdot: '·', div: '÷', pm: '±', mp: '∓', le: '≤', leq: '≤', ge: '≥', geq: '≥', ne: '≠', neq: '≠', approx: '≈', equiv: '≡',
    in: '∈', notin: '∉', subset: '⊂', cup: '∪', cap: '∩', circ: '∘', to: '→', rightarrow: '→', Rightarrow: '⇒', Leftrightarrow: '⇔', iff: '⇔',
    therefore: '∴', ldots: '…', cdots: '⋯', infty: '∞', prime: '′', lvert: '|', rvert: '|', mid: '|', partial: '∂', forall: '∀', exists: '∃', neg: '¬',
    emptyset: '∅', lt: '<', gt: '>', langle: '⟨', rangle: '⟩', degree: '°', sum: '∑', prod: '∏', int: '∫', star: '*', ast: '∗'
  };
  const FUNCS = ['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin', 'arccos', 'arctan', 'ln', 'log', 'exp', 'lim', 'max', 'min', 'det', 'Re', 'Im', 'arg'];
  const BB = { R: 'ℝ', N: 'ℕ', Z: 'ℤ', Q: 'ℚ', C: 'ℂ' };

  function tokenize(s) {
    const t = []; let i = 0;
    while (i < s.length) {
      const c = s[i], st = i;
      if (c === '\\') {
        let j = i + 1;
        if (/[a-zA-Z]/.test(s[j] || '')) { while (j < s.length && /[a-zA-Z]/.test(s[j])) j++; t.push({ k: 'cmd', v: s.slice(i + 1, j), s: st, e: j }); i = j; }
        else { t.push({ k: 'cmd', v: s[j] || '', s: st, e: j + 1 }); i = j + 1; }
      } else if (/\s/.test(c)) { i++; }
      else if (/[0-9.]/.test(c)) { let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; t.push({ k: 'num', v: s.slice(i, j), s: st, e: j }); i = j; }
      else if (/[a-zA-Z]/.test(c)) { t.push({ k: 'id', v: c, s: st, e: i + 1 }); i++; }
      else { t.push({ k: 'ch', v: c, s: st, e: i + 1 }); i++; }
    }
    return t;
  }

  function texToMathML(src, display) {
    const toks = tokenize(src); let p = 0;
    const peek = () => toks[p], next = () => toks[p++];
    const mo = (v, a = '') => `<mo${a}>${esc(v)}</mo>`;
    function group() { // one argument: {...} or single token atom
      const t = peek(); if (!t) return '<mrow></mrow>';
      if (t.k === 'ch' && t.v === '{') { next(); const r = row('}'); next(); return `<mrow>${r}</mrow>`; }
      return atom();
    }
    function rawGroup() { // literal source text inside {...}, spaces kept
      const t = peek(); if (!(t && t.k === 'ch' && t.v === '{')) return t ? (next(), t.v) : '';
      next(); const start = t.e; let depth = 1, end = start;
      while (p < toks.length) {
        const x = next();
        if (x.k === 'ch' && x.v === '{') depth++;
        if (x.k === 'ch' && x.v === '}') { depth--; if (!depth) { end = x.s; break; } }
      }
      return src.slice(start, end);
    }
    const rawText = rawGroup;
    function atom() {
      const t = next(); if (!t) return '';
      if (t.k === 'num') return `<mn>${esc(t.v)}</mn>`;
      if (t.k === 'id') return `<mi>${esc(t.v)}</mi>`;
      if (t.k === 'ch') {
        if (t.v === '{') { const r = row('}'); next(); return `<mrow>${r}</mrow>`; }
        if (t.v === "'") return mo('′');
        if (t.v === '-') return mo('−');
        if (t.v === '*') return mo('×');
        if ('()[]|'.includes(t.v)) return mo(t.v, ' stretchy="false"');
        return mo(t.v);
      }
      const c = t.v;
      if (c === 'frac' || c === 'dfrac' || c === 'tfrac') { const a = group(), b = group(); return c === 'dfrac' ? `<mstyle displaystyle="true"><mfrac>${a}${b}</mfrac></mstyle>` : `<mfrac>${a}${b}</mfrac>`; }
      if (c === 'binom') { const a = group(), b = group(); return `<mrow>${mo('(')}<mfrac linethickness="0">${a}${b}</mfrac>${mo(')')}</mrow>`; }
      if (c === 'sqrt') {
        const n = peek();
        if (n && n.k === 'ch' && n.v === '[') { next(); const idx = row(']'); next(); const a = group(); return `<mroot>${a}<mrow>${idx}</mrow></mroot>`; }
        return `<msqrt>${group()}</msqrt>`;
      }
      if (c === 'text' || c === 'textrm' || c === 'mbox') return `<mtext>${esc(rawText()).replace(/ /g, '&#160;')}</mtext>`;
      if (c === 'textbf') return `<mtext mathvariant="bold">${esc(rawText())}</mtext>`;
      if (c === 'mathrm' || c === 'operatorname') { const r = rawGroup(); return `<mi mathvariant="normal">${esc(r)}</mi>`; }
      if (c === 'mathbb') { const r = rawGroup(); return `<mi mathvariant="normal">${esc(BB[r] || r)}</mi>`; }
      if (c === 'bar' || c === 'overline') return `<mover>${group()}<mo>‾</mo></mover>`;
      if (c === 'hat') return `<mover>${group()}<mo>^</mo></mover>`;
      if (c === 'vec') return `<mover>${group()}<mo>→</mo></mover>`;
      if (c === 'left' || c === 'right') { const d = next(); const v = d ? (d.k === 'cmd' ? (OPS[d.v] || (d.v === '{' ? '{' : d.v === '}' ? '}' : d.v === '|' ? '‖' : '')) : d.v) : ''; return v === '.' || !v ? '' : mo(v, ' stretchy="true"'); }
      if (c === '{' || c === '}' || c === '%' || c === '&' || c === '#' || c === '_') return mo(c);
      if (c === ',' ) return '<mspace width="0.17em"></mspace>';
      if (c === ';' || c === ' ') return '<mspace width="0.28em"></mspace>';
      if (c === '!') return '';
      if (c === 'quad') return '<mspace width="1em"></mspace>';
      if (c === 'qquad') return '<mspace width="2em"></mspace>';
      if (c === '\\') return '<mspace linebreak="newline"></mspace>';
      if (c === '|') return mo('‖');
      if (SYM[c]) return `<mi>${SYM[c]}</mi>`;
      if (c === 'sum' || c === 'prod' || c === 'int') return mo(OPS[c], ' largeop="true" movablelimits="false"');
      if (OPS[c]) return mo(OPS[c]);
      if (FUNCS.includes(c)) return `<mi>${c}</mi>${c === 'lim' ? '' : '<mo>&#x2061;</mo>'}`;
      return `<mi>${esc(c)}</mi>`;
    }
    function row(end) {
      let out = '';
      while (p < toks.length) {
        const t = peek();
        if (end && t.k === 'ch' && t.v === end) break;
        let base = atom();
        // scripts
        let sub = null, sup = null;
        for (let k = 0; k < 2; k++) {
          const s = peek();
          if (s && s.k === 'ch' && s.v === '_' && sub === null) { next(); sub = group(); }
          else if (s && s.k === 'ch' && s.v === '^' && sup === null) { next(); sup = group(); }
        }
        const big = /largeop/.test(base) || /<mi>lim<\/mi>/.test(base);
        const baseOnly = base.replace(/<mo>&#x2061;<\/mo>$/, '');
        if (sub !== null && sup !== null) base = big ? `<munderover>${baseOnly}${sub}${sup}</munderover>` : `<msubsup>${baseOnly}${sub}${sup}</msubsup>`;
        else if (sub !== null) base = big ? `<munder>${baseOnly}${sub}</munder>` : `<msub>${baseOnly}${sub}</msub>`;
        else if (sup !== null) base = big ? `<mover>${baseOnly}${sup}</mover>` : `<msup>${baseOnly}${sup}</msup>`;
        out += base;
      }
      return out;
    }
    const body = row(null);
    return `<math${display ? ' display="block"' : ''}><mrow>${body}</mrow></math>`;
  }

  /** Render a string containing $..$ / $$..$$ maths, ==highlight== and line breaks into safe HTML. */
  function render(text) {
    const s = String(text ?? '').replace(/\\\$/g, '\u0001'); // \$ is a literal dollar sign (money), not a maths delimiter
    let out = '', i = 0;
    while (i < s.length) {
      if (s.startsWith('$$', i)) { const j = s.indexOf('$$', i + 2); if (j < 0) { out += esc(s.slice(i)); break; } out += texToMathML(s.slice(i + 2, j), true); i = j + 2; continue; }
      if (s[i] === '$') { const j = s.indexOf('$', i + 1); if (j < 0) { out += esc(s.slice(i)); break; } out += texToMathML(s.slice(i + 1, j), false); i = j + 1; continue; }
      let j = i; while (j < s.length && s[j] !== '$') j++;
      out += esc(s.slice(i, j)).replace(/==(.+?)==/g, '<mark class="hl">$1</mark>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
      i = j;
    }
    return out.replace(/\u0001/g, '$');
  }

  /* ---------- Safe expression parser for typed answers ---------- */
  function lex(input) {
    let s = String(input).trim()
      .replace(/[−–—]/g, '-').replace(/×/g, '*').replace(/÷/g, '/').replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/\s+/g, ' ')
      .replace(/²/g, '^2').replace(/³/g, '^3');
    const t = []; let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (c === ' ') { i++; continue; }
      const num = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(s.slice(i));
      if (num && !(num[2] && /[a-z]/i.test(s[i + num[0].length] || ''))) { t.push({ k: 'n', v: parseFloat(num[0]) }); i += num[0].length; continue; }
      const id = /^[a-z]+/i.exec(s.slice(i));
      if (id) {
        let w = id[0].toLowerCase();
        // split things like "2pi", "pie" sensibly: greedy match of known names
        const known = ['sqrt', 'cbrt', 'ln', 'log', 'sin', 'cos', 'tan', 'abs', 'exp', 'pi', 'e', 'x', 'n', 'k'];
        let pos = 0;
        while (pos < w.length) {
          const m = known.find(k => w.startsWith(k, pos));
          if (!m) return { error: `I don’t recognise “${id[0]}”. Use numbers, fractions like 3/4, sqrt( ), pi, e or ln( ).` };
          t.push({ k: 'w', v: m }); pos += m.length;
        }
        i += id[0].length; continue;
      }
      if ('+-*/^()|!,'.includes(c)) { t.push({ k: 'o', v: c }); i++; continue; }
      return { error: `The symbol “${c}” can’t be used in a numerical answer.` };
    }
    return { tokens: t };
  }

  function parse(input) {
    if (input === null || input === undefined || String(input).trim() === '') return { error: 'blank' };
    const lx = lex(input); if (lx.error) return { error: lx.error };
    const t = lx.tokens; let p = 0;
    const peek = () => t[p], is = (k, v) => t[p] && t[p].k === k && (v === undefined || t[p].v === v);
    const fns = ['sqrt', 'cbrt', 'ln', 'log', 'sin', 'cos', 'tan', 'abs', 'exp'];
    function expr() { let n = term(); while (is('o', '+') || is('o', '-')) { const op = t[p++].v; n = { op, a: n, b: term() }; } return n; }
    function startsPrimary() { const x = peek(); return x && (x.k === 'n' || x.k === 'w' || (x.k === 'o' && (x.v === '(' || x.v === '|'))); }
    function term() {
      let n = unary();
      for (;;) {
        if (is('o', '*') || is('o', '/')) { const op = t[p++].v; n = { op, a: n, b: unary() }; }
        else if (startsPrimary() && !is('o', '|')) { n = { op: '*', a: n, b: power(), implicit: true }; }
        else break;
      }
      return n;
    }
    function unary() { if (is('o', '-')) { p++; return { op: 'neg', a: unary() }; } if (is('o', '+')) { p++; return unary(); } return power(); }
    function power() { const b = postfix(); if (is('o', '^')) { p++; return { op: '^', a: b, b: unary() }; } return b; }
    function postfix() { let n = primary(); while (is('o', '!')) { p++; n = { op: '!', a: n }; } return n; }
    function primary() {
      const x = t[p++];
      if (!x) throw Error('Your answer seems to end early.');
      if (x.k === 'n') return { num: x.v };
      if (x.k === 'w') {
        if (x.v === 'pi') return { c: 'pi' };
        if (x.v === 'e') return { c: 'e' };
        if (['x', 'n', 'k'].includes(x.v)) throw Error('Give a number, not an expression in ' + x.v + '.');
        if (fns.includes(x.v)) { const arg = is('o', '(') ? (p++, (() => { const e = expr(); if (!is('o', ')')) throw Error('A bracket is missing.'); p++; return e; })()) : power(); return { fn: x.v, a: arg }; }
      }
      if (x.k === 'o' && x.v === '(') { const e = expr(); if (!is('o', ')')) throw Error('A bracket is missing.'); p++; return { op: '()', a: e }; }
      if (x.k === 'o' && x.v === '|') { const e = expr(); if (!is('o', '|')) throw Error('A | is missing.'); p++; return { fn: 'abs', a: e }; }
      throw Error('Check the order of symbols in your answer.');
    }
    let ast;
    try { ast = expr(); if (p < t.length) throw Error(is('o', ',') ? 'Use one value per box.' : 'Check the order of symbols in your answer.'); }
    catch (e) { return { error: e.message }; }
    const value = evaluate(ast);
    if (!Number.isFinite(value)) return { error: 'That doesn’t give a real number.' };
    return { value, ast, tex: toTex(ast) };
  }
  function fact(n) { if (n < 0 || n > 170 || Math.abs(n - Math.round(n)) > 1e-9) return NaN; let r = 1; for (let i = 2; i <= Math.round(n); i++) r *= i; return r; }
  function evaluate(n) {
    if ('num' in n) return n.num;
    if (n.c) return n.c === 'pi' ? Math.PI : Math.E;
    if (n.fn) { const a = evaluate(n.a); return { sqrt: Math.sqrt, cbrt: Math.cbrt, ln: Math.log, log: Math.log10, sin: Math.sin, cos: Math.cos, tan: Math.tan, abs: Math.abs, exp: Math.exp }[n.fn](a); }
    const a = evaluate(n.a);
    switch (n.op) { case 'neg': return -a; case '()': return a; case '!': return fact(a); }
    const b = evaluate(n.b);
    switch (n.op) { case '+': return a + b; case '-': return a - b; case '*': return a * b; case '/': return a / b; case '^': return Math.pow(a, b); }
    return NaN;
  }
  function toTex(n) {
    if ('num' in n) return String(n.num);
    if (n.c) return n.c === 'pi' ? '\\pi' : '\\mathrm{e}';
    if (n.fn) return n.fn === 'sqrt' ? `\\sqrt{${toTex(strip(n.a))}}` : n.fn === 'abs' ? `|${toTex(n.a)}|` : n.fn === 'cbrt' ? `\\sqrt[3]{${toTex(strip(n.a))}}` : `\\${n.fn}(${toTex(strip(n.a))})`;
    switch (n.op) {
      case 'neg': return '-' + toTex(n.a);
      case '()': return `(${toTex(n.a)})`;
      case '!': return toTex(n.a) + '!';
      case '/': return `\\frac{${toTex(strip(n.a))}}{${toTex(strip(n.b))}}`;
      case '^': return `${toTex(n.a)}^{${toTex(strip(n.b))}}`;
      case '*': return n.implicit ? `${toTex(n.a)}${toTex(n.b)}` : `${toTex(n.a)}\\times ${toTex(n.b)}`;
      default: return `${toTex(n.a)}${n.op === '-' ? '-' : '+'}${toTex(n.b)}`;
    }
  }
  function strip(n) { return n && n.op === '()' ? n.a : n; }
  function preview(input) { const r = parse(input); if (r.error) return r.error === 'blank' ? '' : `<span class="parse-error">${esc(r.error)}</span>`; return texToMathML(r.tex, false); }

  /* ---------- Marking ---------- */
  const sfTol = (key, sf = 3) => key === 0 ? 0.5 * Math.pow(10, -sf) : 0.5 * Math.pow(10, Math.floor(Math.log10(Math.abs(key))) - (sf - 1));
  /** Compare one numeric response (string) with a key under the part's accuracy rule.
      spec: {exact?:bool, sf?:n, dp?:n, int?:bool}. Returns 'correct' | 'inexact' | 'wrong' | 'invalid' | 'blank'. */
  function compareNum(raw, key, spec = {}) {
    const r = parse(raw);
    if (r.error) return { verdict: r.error === 'blank' ? 'blank' : 'invalid', error: r.error };
    const v = r.value, close = Math.abs(v - key) <= 1e-9 * Math.max(1, Math.abs(key));
    if (spec.int) return { verdict: close ? 'correct' : 'wrong', value: v };
    if (close) return { verdict: 'correct', value: v };
    if (spec.dp !== undefined) { const tol = 0.5 * Math.pow(10, -spec.dp) + 1e-9; return { verdict: Math.abs(v - key) <= tol ? 'correct' : 'wrong', value: v }; }
    const within3 = Math.abs(v - key) <= sfTol(key, spec.sf || 3) + 1e-12;
    if (spec.exact) return { verdict: within3 ? 'inexact' : 'wrong', value: v };
    return { verdict: within3 ? 'correct' : 'wrong', value: v };
  }
  /** Mark a part. answer: {kind, value, ...}. response: string | string[] | number (mc index).
      Returns {earned, max, verdict, detail, tag?, feedback?}. */
  function markPart(part, response) {
    const a = part.answer, max = part.marks;
    if (a.kind === 'open') return { earned: 0, max, verdict: 'teacher', detail: 'Marked by your teacher from your uploaded working.' };
    if (a.kind === 'mc') {
      if (response === undefined || response === null || response === '') return { earned: 0, max, verdict: 'blank' };
      const ok = Number(response) === a.correct; const err = !ok && (part.errors || []).find(e => e.choice === Number(response));
      return { earned: ok ? max : 0, max, verdict: ok ? 'correct' : 'wrong', tag: err && err.tag, feedback: err && err.fb };
    }
    const keys = a.kind === 'num' ? [a.value] : a.value;
    const resp = a.kind === 'num' ? [response] : (Array.isArray(response) ? response : []);
    if (resp.every(x => x === undefined || String(x).trim() === '')) return { earned: 0, max, verdict: 'blank' };
    let results;
    if (a.kind === 'list') { // unordered
      const used = new Set();
      results = resp.map(raw => {
        for (let k = 0; k < keys.length; k++) { if (used.has(k)) continue; const c = compareNum(raw, keys[k], a); if (c.verdict === 'correct' || c.verdict === 'inexact') { used.add(k); return c; } }
        const c = parse(raw); return { verdict: c.error ? (c.error === 'blank' ? 'blank' : 'invalid') : 'wrong', value: c.value, error: c.error };
      });
    } else results = keys.map((k, i) => compareNum(resp[i], k, a));
    const nOk = results.filter(r => r.verdict === 'correct').length, nInexact = results.filter(r => r.verdict === 'inexact').length;
    const invalid = results.find(r => r.verdict === 'invalid');
    const nonBlank = resp.filter(x => x !== undefined && x !== null && String(x).trim() !== '').length;
    const extras = a.kind === 'list' ? Math.max(0, nonBlank - (nOk + nInexact)) : 0;
    let earned = nOk === keys.length ? max : (a.markEach && nOk ? (max >= keys.length ? max - keys.length + nOk : Math.floor(max * nOk / keys.length)) : 0);
    let verdict = nOk === keys.length ? 'correct' : nOk + nInexact === keys.length && nInexact ? 'inexact' : nOk ? 'partial' : invalid ? 'invalid' : 'wrong';
    let tag, feedback;
    if (verdict === 'correct' && extras > 0) { earned = Math.max(0, max - 1); verdict = 'partial'; tag = 'extra-solution'; feedback = 'You found the right solution(s) but also gave a value that does not satisfy the equation. Check every answer in the original equation.'; }
    // misconception detection: compare the student's values with known error values
    if (verdict !== 'correct') {
      const vals = results.map(r => r.value).filter(v => v !== undefined && Number.isFinite(v));
      const near = (u, v) => Math.abs(u - v) <= Math.max(1e-9, sfTol(v || 1, 3));
      for (const e of part.errors || []) {
        const ev = Array.isArray(e.value) ? e.value : [e.value]; let hit;
        if (a.kind === 'list') { const pool = vals.slice(); hit = ev.length === pool.length && ev.every(x => { const i = pool.findIndex(v => near(v, x)); if (i < 0) return false; pool.splice(i, 1); return true; }); }
        else hit = ev.every((x, i) => results[i] && results[i].value !== undefined && near(results[i].value, x));
        if (hit) { tag = e.tag; feedback = e.fb; break; }
      }
      if (verdict === 'inexact') { tag = tag || 'not-exact'; feedback = feedback || part.inexactFb || 'Your value is right to 3 significant figures, but this question needs the exact answer (fraction, surd or π form).'; }
    }
    return { earned, max, verdict, results, tag, feedback, error: invalid && invalid.error };
  }

  Hub.math = { render, texToMathML, parse, evaluate, preview, compareNum, markPart, sfTol, esc };
})(window.Hub = window.Hub || {});

/* Question-bank core: seeded randomness, exact fractions, TeX formatting, registry.
   Every generator is ORIGINAL (parameterised by Miss Badmus' Hub), mapped to a lesson-level skill.
   Each part carries: command term, marks, answer spec, IB-style markscheme (M/A/R/AG), worked
   working, hint, known-error values (misconception detection) and a SymPy `verify` expression
   that tests/verify_answers.py re-derives independently. */
(function (Hub) {
  'use strict';
  function rng(seed) {
    let a = (seed >>> 0) || 1;
    const next = () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const R = {
      next,
      int: (lo, hi) => lo + Math.floor(next() * (hi - lo + 1)),
      pick: arr => arr[Math.floor(next() * arr.length)],
      nz: (lo, hi) => { let v; do v = lo + Math.floor(next() * (hi - lo + 1)); while (v === 0); return v; },
      bool: () => next() < 0.5,
      shuffle: arr => { const b = arr.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; },
      distinct: (n, lo, hi, avoid = []) => { const out = []; let guard = 0; while (out.length < n && guard++ < 999) { const v = lo + Math.floor(next() * (hi - lo + 1)); if (!out.includes(v) && !avoid.includes(v)) out.push(v); } return out; }
    };
    return R;
  }
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  class F {
    constructor(n, d = 1) { if (d === 0) throw Error('zero denominator'); if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); this.n = n / g; this.d = d / g; }
    static of(x) { return x instanceof F ? x : new F(x, 1); }
    add(o) { o = F.of(o); return new F(this.n * o.d + o.n * this.d, this.d * o.d); }
    sub(o) { o = F.of(o); return new F(this.n * o.d - o.n * this.d, this.d * o.d); }
    mul(o) { o = F.of(o); return new F(this.n * o.n, this.d * o.d); }
    div(o) { o = F.of(o); return new F(this.n * o.d, this.d * o.n); }
    neg() { return new F(-this.n, this.d); }
    pow(k) { let r = new F(1); const b = k < 0 ? new F(this.d, this.n) : this; for (let i = 0; i < Math.abs(k); i++) r = r.mul(b); return r; }
    val() { return this.n / this.d; }
    isInt() { return this.d === 1; }
    tex() { return this.d === 1 ? String(this.n) : (this.n < 0 ? `-\\frac{${-this.n}}{${this.d}}` : `\\frac{${this.n}}{${this.d}}`); }
    py() { return this.d === 1 ? String(this.n) : `Rational(${this.n},${this.d})`; }
    eq(o) { o = F.of(o); return this.n === o.n && this.d === o.d; }
  }
  const fr = (n, d = 1) => new F(n, d);
  const T = x => x instanceof F ? x.tex() : num(x);
  function num(x) { if (Number.isInteger(x)) return String(x); const r = Number(x.toPrecision(12)); return String(r); }
  function round(x, dp) { const m = Math.pow(10, dp); return Math.round((x + Number.EPSILON * Math.sign(x)) * m) / m; }
  function sf(x, s = 3) { if (x === 0) return 0; return Number(x.toPrecision(s)); }
  /** "+ 3" / "- 3" for joining terms; coefficient formatting for polynomials. */
  function poly(terms, first = true) { // terms: [[coef, '<tex var>'], ...]
    let out = '';
    for (const [c0, v] of terms) {
      const c = F.of(c0); if (c.n === 0) continue;
      const neg = c.n < 0, a = neg ? c.neg() : c;
      let body = v ? ((a.n === 1 && a.d === 1) ? v : (a.d === 1 ? `${a.n}${v}` : `${a.tex()}${v}`)) : a.tex();
      if (!out) out = (neg ? '-' : '') + body; else out += (neg ? ' - ' : ' + ') + body;
    }
    return out || '0';
  }
  const lin = (a, b, v = 'x') => poly([[a, v], [b, '']]);
  const sgn = c => (F.of(c).n < 0 ? ` - ${F.of(c).neg().tex()}` : ` + ${F.of(c).tex()}`);
  const paren = x => (F.of(x).n < 0 ? `(${T(x)})` : T(x));
  function comb(n, r) { if (r < 0 || r > n) return 0; let c = 1; for (let i = 1; i <= r; i++) c = c * (n - r + i) / i; return Math.round(c); }
  function factorial(n) { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
  /** Build a multiple-choice answer: options [{tex, key}], correct key; shuffled with seeded rng. */
  function mc(R, options, correctKey) { const sh = R.shuffle(options); return { kind: 'mc', choices: sh.map(o => o.tex), keys: sh.map(o => o.key), correct: sh.findIndex(o => o.key === correctKey) }; }
  const pyF = x => x instanceof F ? x.py() : String(x);

  const registry = {};
  /** meta: {skill, title, paper:1|2, challenge?:bool} ; gen(R, opts) → {stem, parts, calc?, numworks?} */
  function reg(id, meta, gen) { registry[id] = Object.assign({ id, gen }, meta); }

  let counter = 0;
  function build(genId, seed, opts = {}) {
    const g = registry[genId]; if (!g) throw Error('Unknown generator ' + genId);
    const R = rng(seed * 7919 + genId.length * 104729 + (opts.challenge ? 31 : 0));
    const q = g.gen(R, opts);
    const course = g.skill.slice(0, 2);
    q.parts.forEach((p, i) => {
      p.label = p.label || String.fromCharCode(97 + i); p.id = p.label; p.ms = p.ms || []; p.working = p.working || [];
      // keep only misconception values that are finite and differ from the correct answer
      const same = (u, v) => Math.abs(u - v) <= 1e-9 * Math.max(1, Math.abs(v));
      p.errors = (p.errors || []).filter(e => {
        if (e.choice !== undefined) return true;
        const ev = Array.isArray(e.value) ? e.value : [e.value];
        if (!ev.every(Number.isFinite)) return false;
        if (p.answer.kind === 'num') return !same(ev[0], p.answer.value);
        if (p.answer.kind === 'tuple') return !(ev.length === p.answer.value.length && ev.every((v, j) => same(v, p.answer.value[j])));
        if (p.answer.kind === 'list') { const a = ev.slice().sort((u, v) => u - v), b = p.answer.value.slice().sort((u, v) => u - v); return !(a.length === b.length && a.every((v, j) => same(v, b[j]))); }
        return true;
      });
    });
    return Object.assign({
      id: 'q' + Date.now().toString(36) + (counter++).toString(36) + Math.floor(Math.random() * 1e4).toString(36),
      gen: genId, seed, skill: g.skill, course, title: g.title, paper: q.paper || g.paper, calc: (q.paper || g.paper) === 2,
      challenge: !!opts.challenge, marks: q.parts.reduce((s, p) => s + p.marks, 0)
    }, q);
  }

  Hub.qcore = { rng, F, fr, T, num, round, sf, poly, lin, sgn, paren, comb, factorial, mc, pyF, gcd, reg, registry, build };
})(window.Hub = window.Hub || {});

/* AA SL — original parameterised questions (Units 1–7, Year 1). Mapped to Oxford SL 2019 section numbers
   for curriculum alignment only; no textbook questions are reproduced. */
(function (Hub) {
  'use strict';
  const { F, fr, T, num, round, sf, poly, lin, sgn, paren, comb, mc, pyF, reg } = Hub.qcore;

  /* ---------- Number systems & rounding (SL prior learning / Unit 1 start) ---------- */
  reg('sl.round', { skill: 'SL-0.1', title: 'Significant figures, standard form and percentage error', paper: 2 }, R => {
    let N, s4;
    do { const m = R.int(1000000, 9999999); const e = R.pick([-6, -5, -4, 1, 2, 3]); N = Number((m * Math.pow(10, e - 6)).toPrecision(7)); s4 = Number(String(m)[3]); } while (s4 === 5);
    const N3 = sf(N, 3), e = Math.floor(Math.log10(Math.abs(N))), a = Number((N3 / Math.pow(10, e)).toPrecision(3));
    const trunc = Number((Math.trunc(N / Math.pow(10, e - 2)) * Math.pow(10, e - 2)).toPrecision(3));
    const E = sf(N, 1), pct = Math.abs(E - N) / Math.abs(N) * 100, wrongPct = Math.abs(E - N) / Math.abs(E) * 100;
    return {
      stem: `A measurement is recorded as $N = ${num(N)}$.`,
      parts: [
        { command: 'Write down', prompt: `$N$ correct to three significant figures.`, marks: 1, answer: { kind: 'num', value: N3, exact: true, display: num(N3) },
          inexactFb: 'Give exactly three significant figures.', ms: [['A1', `$${num(N3)}$`]], working: [`The first three significant figures are followed by a digit ${s4 < 5 ? 'less than 5, so round down' : 'of 5 or more, so round up'}: $${num(N3)}$`],
          hint: 'Count significant figures from the first non-zero digit.', errors: [{ value: trunc, tag: 'truncated', fb: 'You truncated (cut off) the digits instead of rounding.' }], verify: `sf(${N},3)` },
        { command: 'Write down', dep: true, prompt: `your answer to part (a) in the form $a\\times 10^{k}$, where $1\\le a<10$ and $k\\in\\mathbb{Z}$.`, marks: 2, answer: { kind: 'tuple', labels: ['a', 'k'], value: [a, e], markEach: true, exact: true, display: `${num(a)}\\times 10^{${e}}` },
          ms: [['A1', `$a=${num(a)}$`], ['A1', `$k=${e}$`]], working: [`$${num(N3)} = ${num(a)}\\times 10^{${e}}$`], hint: 'Move the decimal point until exactly one non-zero digit is in front of it; count the moves.',
          errors: [{ value: [a, -e], tag: 'standard-form-sign', fb: 'Check the sign of the power: small numbers have a negative power of 10, large numbers a positive one.' }], verify: `(sf(${N},3)/10**${e}, ${e})` },
        { command: 'Calculate', prompt: `A student estimates $N$ as $${num(E)}$. Calculate the percentage error in this estimate.`, marks: 2, answer: { kind: 'num', value: pct, sf: 3, display: `${num(sf(pct, 3))}\\%` },
          ms: [['M1', `$\\left|\\frac{${num(E)} - ${num(N)}}{${num(N)}}\\right|\\times 100\\%$`], ['A1', `$${num(sf(pct, 3))}\\%$`]],
          working: [`$\\varepsilon = \\left|\\frac{v_A - v_E}{v_E}\\right|\\times 100\\%$ where $v_E$ is the exact value`, `$= \\left|\\frac{${num(E)} - ${num(N)}}{${num(N)}}\\right|\\times 100\\% = ${num(sf(pct, 3))}\\%$`],
          hint: 'Divide by the exact value, not the estimate (formula booklet SL 1.6).', errors: [{ value: wrongPct, tag: 'pct-wrong-denominator', fb: 'You divided by the estimate. Percentage error divides by the exact value.' }], verify: `abs(${E}-${N})/abs(${N})*100` }
      ]
    };
  });

  /* ---------- 1.1 Sigma notation ---------- */
  reg('sl.sigma', { skill: 'SL-1.1', title: 'Sigma notation for arithmetic series', paper: 1, challenge: true }, (R, o) => {
    const a = R.int(2, 6), b = R.nz(-5, 7), n = o.challenge ? R.int(25, 40) : R.int(8, 20);
    const S = a * n * (n + 1) / 2 + b * n, m = R.int(3, 9), q = R.int(20, 45);
    return {
      stem: `Consider the series $\\sum_{r=1}^{${n}} (${lin(a, b, 'r')})$.`,
      parts: [
        { command: 'Write down', prompt: 'the first three terms of the series.', marks: 1, answer: { kind: 'tuple', labels: ['u_1', 'u_2', 'u_3'], value: [a + b, 2 * a + b, 3 * a + b], display: `${a + b},\\ ${2 * a + b},\\ ${3 * a + b}` },
          ms: [['A1', `$${a + b},\\ ${2 * a + b},\\ ${3 * a + b}$`]], working: [`Substitute $r = 1, 2, 3$ into $${lin(a, b, 'r')}$.`], hint: 'Replace r with 1, then 2, then 3.', verify: `(${a}*1+${b}, ${a}*2+${b}, ${a}*3+${b})` },
        { command: 'Find', prompt: 'the value of the series.', marks: 3, answer: { kind: 'num', value: S, exact: true, display: String(S) },
          ms: [['M1', `recognising an arithmetic series with $u_1 = ${a + b}$, $d = ${a}$`], ['M1', `$S_{${n}} = \\frac{${n}}{2}\\left(2(${a + b}) + ${n - 1}(${a})\\right)$`], ['A1', `$${S}$`]],
          working: [`$u_1 = ${a + b}$, $d = ${a}$, $n = ${n}$`, `$S_{${n}} = \\frac{${n}}{2}\\left(2u_1 + (n-1)d\\right) = \\frac{${n}}{2}\\left(${2 * (a + b)} + ${(n - 1) * a}\\right) = ${S}$`],
          hint: 'Is the series arithmetic? Find u₁ and d, then use the formula for Sₙ in the booklet.',
          errors: [{ value: a * n * (n + 1) / 2 + b, tag: 'constant-once', fb: `The constant ${b} is added in every one of the ${n} terms, not just once.` },
            { value: a * (n - 1) * n / 2 + b * (n - 1), tag: 'off-by-one-terms', fb: `There are ${n} terms from r = 1 to r = ${n}.` }],
          verify: `summation(${a}*r+(${b}),(r,1,${n}))` },
        { command: 'Write down', prompt: `the number of terms in $\\sum_{r=${m}}^{${q}} (${lin(a, b, 'r')})$.`, marks: 1, answer: { kind: 'num', value: q - m + 1, int: true, display: String(q - m + 1) },
          ms: [['A1', `$${q} - ${m} + 1 = ${q - m + 1}$`]], working: [`Number of terms $= ${q} - ${m} + 1 = ${q - m + 1}$`], hint: 'Try a small case: how many terms from r = 3 to r = 5?',
          errors: [{ value: q - m, tag: 'count-terms', fb: 'Count both ends: from r = m to r = q there are q − m + 1 terms.' }], verify: `len(range(${m},${q}+1))` }
      ]
    };
  });

  /* ---------- 1.2 Arithmetic sequences ---------- */
  reg('sl.arith', { skill: 'SL-1.2a', title: 'Arithmetic sequences: finding d, u₁ and n', paper: 1, challenge: true }, (R, o) => {
    const u1 = R.int(-10, 20), d = o.challenge ? R.pick([-7, -4, -3, 3, 5, 7]) + R.pick([0.5, -0.5]) : R.nz(-5, 7);
    const [p, q] = (() => { const p = R.int(2, 6), q = p + R.int(3, 7); return [p, q]; })();
    const up = u1 + (p - 1) * d, uq = u1 + (q - 1) * d, k = R.int(20, 60), T = u1 + (k - 1) * d;
    return {
      stem: `In an arithmetic sequence, $u_{${p}} = ${num(up)}$ and $u_{${q}} = ${num(uq)}$.`,
      parts: [
        { command: 'Find', prompt: 'the common difference, $d$.', marks: 2, answer: { kind: 'num', value: d, exact: true, display: num(d) },
          ms: [['M1', `$${q - p}d = ${num(uq)} - ${paren(up)}$`], ['A1', `$d = ${num(d)}$`]], working: [`$u_{${q}} - u_{${p}} = (${q} - ${p})d$`, `$${q - p}d = ${num(uq - up)} \\Rightarrow d = ${num(d)}$`],
          hint: `How many steps of d are there from term ${p} to term ${q}?`, errors: [{ value: (up - uq) / (q - p), tag: 'difference-sign', fb: 'Subtract the earlier term from the later term.' }, { value: (uq - up) / (q - p + 1), tag: 'steps-count', fb: `From u${p} to u${q} there are ${q - p} steps, not ${q - p + 1}.` }],
          verify: `(${uq}-(${up}))/(${q}-${p})` },
        { command: 'Find', prompt: '$u_1$.', marks: 1, answer: { kind: 'num', value: u1, exact: true, display: num(u1) },
          ms: [['A1', `$u_1 = ${num(u1)}$ (FT their $d$)`]], working: [`$u_1 = u_{${p}} - ${p - 1}d = ${num(up)} - ${p - 1}(${num(d)}) = ${num(u1)}$`], hint: `Go back ${p - 1} steps from u${p}.`,
          errors: [{ value: up - p * d, tag: 'n-minus-1', fb: `u${p} is ${p - 1} steps after u₁, not ${p}.` }], verify: `${up}-(${p}-1)*(${d})` },
        { command: 'Find', prompt: `the value of $n$ for which $u_n = ${num(T)}$.`, marks: 2, answer: { kind: 'num', value: k, int: true, display: String(k) },
          ms: [['M1', `$${num(u1)} + (n-1)(${num(d)}) = ${num(T)}$`], ['A1', `$n = ${k}$`]], working: [`$u_n = u_1 + (n-1)d$`, `$${num(T)} = ${num(u1)} + (n-1)(${num(d)})$`, `$n - 1 = ${k - 1} \\Rightarrow n = ${k}$`],
          hint: 'Use uₙ = u₁ + (n − 1)d and solve for n.', errors: [{ value: k - 1, tag: 'n-minus-1', fb: 'You found n − 1. Add 1 to get n.' }], verify: `solve(Eq(${u1}+(n-1)*(${d}),${T}),n)[0]` }
      ]
    };
  });

  /* ---------- 1.2 Geometric sequences ---------- */
  reg('sl.geo', { skill: 'SL-1.2b', title: 'Geometric sequences: r, u₁ and the first term to exceed a value', paper: 1, challenge: true }, (R, o) => {
    let a, rr, rTex, rv;
    if (o.challenge || R.bool()) { const c = R.pick([[3, 2], [5, 4], [4, 3]]); rr = fr(c[0], c[1]); const k = R.int(1, 3); a = k * Math.pow(c[1], 4); }
    else { rr = fr(R.pick([2, 3])); a = R.int(2, 9); }
    rv = rr.val(); rTex = rr.tex();
    const u2 = fr(a).mul(rr), u5 = fr(a).mul(rr.pow(4));
    const L = R.pick([1000, 5000, 10000, 50000]) * (rv > 2 ? 10 : 1);
    let n = 1; while (a * Math.pow(rv, n - 1) <= L) n++;
    const xInt = 1 + Math.log(L / a) / Math.log(rv);
    return {
      stem: `The second term of a geometric sequence is $${u2.tex()}$ and the fifth term is $${u5.tex()}$.`,
      parts: [
        { command: 'Find', prompt: 'the common ratio, $r$.', marks: 2, answer: { kind: 'num', value: rv, exact: true, display: rTex },
          ms: [['M1', `$r^{3} = \\frac{${u5.tex()}}{${u2.tex()}}$`], ['A1', `$r = ${rTex}$`]], working: [`$u_5 = u_2 r^{3}$`, `$r^{3} = \\frac{${u5.tex()}}{${u2.tex()}} = ${rr.pow(3).tex()}$`, `$r = ${rTex}$`],
          hint: 'How many multiplications by r take you from the 2nd term to the 5th term?', errors: [{ value: Math.pow(rv, 4 / 3), tag: 'power-count', fb: 'From u₂ to u₅ is three multiplications by r, so r³ = u₅ ÷ u₂.' }], verify: `real_root(${u5.py()}/(${u2.py()}),3)` },
        { command: 'Find', prompt: '$u_1$.', marks: 1, answer: { kind: 'num', value: a, exact: true, display: String(a) },
          ms: [['A1', `$u_1 = \\frac{${u2.tex()}}{${rTex}} = ${a}$`]], working: [`$u_1 = \\frac{u_2}{r} = ${a}$`], hint: 'Divide the second term by r.', errors: [{ value: u2.mul(rr).val(), tag: 'multiplied-not-divided', fb: 'To go backwards one term, divide by r.' }], verify: `${u2.py()}/(${rr.py()})` },
        { command: 'Find', prompt: `the smallest value of $n$ for which $u_n > ${L}$.`, marks: 3, paper: 2, answer: { kind: 'num', value: n, int: true, display: String(n) },
          ms: [['M1', `$${a}\\left(${rTex}\\right)^{n-1} > ${L}$`], ['(A1)', `$n > ${num(sf(xInt, 4))}$`], ['A1', `$n = ${n}$`]],
          working: [`$${a}\\left(${rTex}\\right)^{n-1} > ${L}$`, `NumWorks: graph $y = ${a}\\times(${num(rv)})^{x-1}$ and $y = ${L}$; intersection at $x \\approx ${num(sf(xInt, 4))}$`, `$n$ is a whole number, so $n = ${n}$`],
          hint: 'Set up an inequality, then use the NumWorks (Grapher or Sequences table). n must be a whole number.', numworks: { app: 'Grapher', lines: [[`y=${a}×${num(rv)}^(x-1)`, ''], [`y=${L}`, ''], ['Intersection', `x=${num(sf(xInt, 4))}`]] },
          errors: [{ value: n - 1, tag: 'round-down', fb: `u${n - 1} is not yet bigger than ${L}. Check both neighbouring terms.` }], verify: `next(m for m in range(1,500) if ${a}*(${rr.py()})**(m-1) > ${L})` }
      ]
    };
  });

  /* ---------- 1.3 Arithmetic series ---------- */
  reg('sl.arseries', { skill: 'SL-1.3a', title: 'Arithmetic series: Sₙ and finding n', paper: 1, challenge: true }, (R, o) => {
    const a = R.int(3, 15), d = R.int(2, 7), m = R.int(15, 30);
    const S = m * (2 * a + (m - 1) * d) / 2, n0 = R.int(20, 40), Sn = k => k * (2 * a + (k - 1) * d) / 2;
    const variant = o.challenge ? 'exceed' : R.pick(['exact', 'exceed']);
    const X = variant === 'exact' ? Sn(n0) : Sn(n0 - 1) + R.int(1, Sn(n0) - Sn(n0 - 1) - 1);
    const termN = (X - a) / d + 1;
    const partB = variant === 'exact'
      ? { command: 'Find', prompt: `The sum of the first $n$ terms is $${X}$. Find $n$.`, marks: 3, paper: 2, answer: { kind: 'num', value: n0, int: true, display: String(n0) },
          ms: [['M1', `$\\frac{n}{2}\\left(2(${a}) + (n-1)(${d})\\right) = ${X}$`], ['(M1)', 'attempt to solve their quadratic (NumWorks)'], ['A1', `$n = ${n0}$`]],
          working: [`$\\frac{n}{2}(${2 * a} + ${d}(n-1)) = ${X}$`, `$${d}n^{2} + ${2 * a - d}n - ${2 * X} = 0$`, `NumWorks Equations: $n = ${n0}$ (reject the negative root)`],
          hint: 'Use Sₙ, not uₙ. You will get a quadratic in n: solve it on the NumWorks.', errors: [{ value: termN, tag: 'term-not-sum', fb: 'You set the n-th TERM equal to the total. The total of the first n terms is Sₙ.' }],
          verify: `[s for s in solve(Eq(n/2*(2*${a}+(n-1)*${d}),${X}),n) if s>0][0]` }
      : { command: 'Find', prompt: `the least number of terms for which the sum of the series is greater than $${X}$.`, marks: 3, paper: 2, answer: { kind: 'num', value: n0, int: true, display: String(n0) },
          ms: [['M1', `$\\frac{n}{2}\\left(2(${a}) + (n-1)(${d})\\right) > ${X}$`], ['(A1)', `$S_{${n0 - 1}} = ${Sn(n0 - 1)}$, $S_{${n0}} = ${Sn(n0)}$`], ['A1', `$n = ${n0}$`]],
          working: [`$S_n = \\frac{n}{2}(${2 * a} + ${d}(n-1)) > ${X}$`, `Check both neighbours: $S_{${n0 - 1}} = ${Sn(n0 - 1)}$ (too small), $S_{${n0}} = ${Sn(n0)}$ ✓`, `$n = ${n0}$`],
          hint: 'Use Sₙ and check BOTH the term count just below and just above your NumWorks solution.', errors: [{ value: n0 - 1, tag: 'not-checking-both', fb: `S${n0 - 1} is ${Sn(n0 - 1)}, which is not greater than ${X}. Always check both neighbouring values.` }, { value: Math.ceil(termN), tag: 'term-not-sum', fb: 'You used the n-th term instead of the sum Sₙ.' }],
          verify: `next(k for k in range(1,500) if Rational(k,2)*(2*${a}+(k-1)*${d}) > ${X})` };
    return {
      stem: `An arithmetic series has first term $${a}$ and common difference $${d}$.`,
      parts: [
        { command: 'Find', prompt: `the sum of the first $${m}$ terms.`, marks: 2, answer: { kind: 'num', value: S, exact: true, display: String(S) },
          ms: [['M1', `$\\frac{${m}}{2}\\left(2(${a}) + ${m - 1}(${d})\\right)$`], ['A1', `$${S}$`]], working: [`$S_{${m}} = \\frac{${m}}{2}\\left(2(${a}) + (${m}-1)(${d})\\right) = ${S}$`],
          hint: 'Formula booklet: $S_n = \\frac{n}{2}(2u_1 + (n - 1)d)$.', errors: [{ value: a + (m - 1) * d, tag: 'term-not-sum', fb: `That is u${m}, the ${m}th term, not the sum.` }, { value: m * (2 * a + m * d) / 2, tag: 'n-not-n-1', fb: 'The formula uses (n − 1)d.' }],
          verify: `summation(${a}+(r-1)*${d},(r,1,${m}))` },
        partB
      ]
    };
  });

  /* ---------- 1.3 Geometric series and sum to infinity ---------- */
  reg('sl.geoseries', { skill: 'SL-1.3b', title: 'Geometric series and the sum to infinity', paper: 1 }, R => {
    const rr = R.pick([fr(1, 2), fr(-1, 2), fr(1, 3), fr(-1, 3), fr(2, 3), fr(3, 4), fr(-2, 3)]);
    const a = R.int(2, 9) * rr.d * rr.d, n = 4;
    const Sinf = fr(a).div(fr(1).sub(rr)), S4 = fr(a).mul(fr(1).sub(rr.pow(n))).div(fr(1).sub(rr));
    const u2 = fr(a).mul(rr), u3 = u2.mul(rr);
    const mcA = mc(R, [{ tex: '$|r| < 1$', key: 'abs' }, { tex: '$r < 1$', key: 'lt1' }, { tex: '$u_1 < 1$', key: 'u1' }, { tex: '$r > 0$', key: 'pos' }], 'abs');
    return {
      stem: `Consider the geometric series $${a} ${sgn(u2)} ${sgn(u3)} + \\cdots$`,
      parts: [
        { command: 'Write down', prompt: 'the common ratio.', marks: 1, answer: { kind: 'num', value: rr.val(), exact: true, display: rr.tex() }, ms: [['A1', `$r = ${rr.tex()}$`]], working: [`$r = \\frac{${u2.tex()}}{${a}} = ${rr.tex()}$`], hint: 'Divide the second term by the first.', verify: `${u2.py()}/${a}` },
        { command: 'Find', prompt: 'the sum of the first four terms. Give your answer as an exact value.', marks: 2, answer: { kind: 'num', value: S4.val(), exact: true, display: S4.tex() },
          ms: [['M1', `$\\frac{${a}\\left(1-\\left(${rr.tex()}\\right)^{4}\\right)}{1-\\left(${rr.tex()}\\right)}$`], ['A1', `$${S4.tex()}$`]], working: [`$S_4 = \\frac{u_1(1-r^{4})}{1-r} = ${S4.tex()}$`],
          hint: 'Use $S_n = \\frac{u_1(1 - r^{n})}{1 - r}$, or add the four terms.', errors: [{ value: fr(a).mul(fr(1).sub(rr.pow(3))).div(fr(1).sub(rr)).val(), tag: 'n-minus-1', fb: 'Use rⁿ with n = 4 in the sum formula.' }], verify: `summation(${a}*(${rr.py()})**(r-1),(r,1,4))` },
        { command: 'State', prompt: 'the condition that guarantees this series has a sum to infinity.', marks: 1, answer: Object.assign(mcA, { display: '|r| < 1' }), ms: [['R1', '$|r| < 1$']], working: ['A geometric series converges exactly when $|r| < 1$, i.e. $-1 < r < 1$.'], hint: 'Negative ratios can still converge.', verify: `'abs' if abs(${rr.py()})<1 else 'none'` },
        { command: 'Find', prompt: 'the exact value of the sum to infinity.', marks: 2, answer: { kind: 'num', value: Sinf.val(), exact: true, display: Sinf.tex() },
          ms: [['M1', `$\\frac{${a}}{1-\\left(${rr.tex()}\\right)}$`], ['A1', `$${Sinf.tex()}$`]], working: [`$S_\\infty = \\frac{u_1}{1-r} = \\frac{${a}}{1-\\left(${rr.tex()}\\right)} = ${Sinf.tex()}$`],
          hint: '$S_\\infty = \\frac{u_1}{1 - r}$. Take care with a negative $r$.', errors: [{ value: fr(a).div(fr(1).add(rr)).val(), tag: 'sinf-sign', fb: 'The denominator is 1 − r. With a negative r, 1 − r is bigger than 1.' }], verify: `${a}/(1-(${rr.py()}))` }
      ]
    };
  });

  /* ---------- 1.4 Applications: compound interest / depreciation ---------- */
  reg('sl.finance', { skill: 'SL-1.4', title: 'Compound interest and depreciation (NumWorks)', paper: 2 }, R => {
    if (R.bool()) {
      const P = R.pick([1500, 2000, 2500, 3000, 4000, 5000]), i = R.pick([2.5, 3, 3.5, 4, 4.5, 5.2]), k = R.pick([12, 4]), t = R.int(4, 10);
      const FV = P * Math.pow(1 + i / (100 * k), k * t), per = k === 12 ? 'monthly' : 'quarterly';
      let y = 1; while (P * Math.pow(1 + i / (100 * k), k * y) <= 1.5 * P) y++;
      return {
        stem: `Ama invests $\\$${P}$ in an account that pays a nominal annual interest rate of $${i}\\%$, compounded ${per}.`,
        parts: [
          { command: 'Find', prompt: `the value of the investment after $${t}$ years, correct to two decimal places.`, marks: 3, answer: { kind: 'num', value: round(FV, 2), dp: 2, display: `\\$${round(FV, 2).toFixed(2)}` },
            ms: [['M1', `$${P}\\left(1+\\frac{${i}}{100(${k})}\\right)^{${k}(${t})}$`], ['A1', `$k = ${k}$, $n = ${k * t}$ seen`], ['A1', `$\\$${round(FV, 2).toFixed(2)}$`]],
            working: [`$FV = PV\\left(1+\\frac{r}{100k}\\right)^{kn}$`, `$= ${P}\\left(1+\\frac{${i}}{${100 * k}}\\right)^{${k * t}} = ${round(FV, 2).toFixed(2)}$`],
            hint: `${per[0].toUpperCase() + per.slice(1)} means k = ${k} compounding periods per year.`, numworks: { app: 'Calculation', lines: [[`${P}×(1+${i}/(100×${k}))^(${k}×${t})`, round(FV, 2).toFixed(2)]] },
            errors: [{ value: round(P * Math.pow(1 + i / 100, t), 2), tag: 'annual-not-compounded', fb: `Interest is added ${per}: divide the rate by ${k} and use ${k * t} periods.` }, { value: round(P * (1 + i * t / 100), 2), tag: 'simple-interest', fb: 'That is simple interest. Compound interest grows by a percentage of the new amount each period.' }],
            verify: `${P}*(1+Rational(${Math.round(i * 10)},${1000 * k}))**(${k * t})` },
          { command: 'Find', prompt: `the number of complete years until the investment is first worth more than $\\$${1.5 * P}$.`, marks: 3, answer: { kind: 'num', value: y, int: true, display: String(y) },
            ms: [['M1', `$${P}\\left(1+\\frac{${i}}{${100 * k}}\\right)^{${k}n} > ${1.5 * P}$`], ['(A1)', `$n > ${num(sf(Math.log(1.5) / (k * Math.log(1 + i / (100 * k))), 4))}$`], ['A1', `$${y}$ years`]],
            working: [`$${P}\\left(1+\\frac{${i}}{${100 * k}}\\right)^{${k}n} > ${1.5 * P}$`, `NumWorks: $n \\approx ${num(sf(Math.log(1.5) / (k * Math.log(1 + i / (100 * k))), 4))}$`, `Complete years: $${y}$`],
            hint: 'Graph both sides on the NumWorks, or use a table of values for whole years.', errors: [{ value: y - 1, tag: 'round-down', fb: `After ${y - 1} years it has not yet passed ${1.5 * P}. Round UP to a complete year.` }],
            verify: `next(m for m in range(1,200) if ${P}*(1+Rational(${Math.round(i * 10)},${1000 * k}))**(${k}*m) > ${1.5 * P})` }
        ]
      };
    }
    const V0 = R.pick([18000, 22000, 26000, 32000]), p = R.pick([12, 15, 18, 20]), t = R.int(3, 6);
    const V = V0 * Math.pow(1 - p / 100, t); let y = 1; while (V0 * Math.pow(1 - p / 100, y) >= V0 / 2) y++;
    return {
      stem: `A car is bought for $\\$${V0}$. Its value depreciates by $${p}\\%$ each year.`,
      parts: [
        { command: 'Find', prompt: `the value of the car after $${t}$ years, correct to the nearest dollar.`, marks: 2, answer: { kind: 'num', value: Math.round(V), dp: 0, display: `\\$${Math.round(V)}` },
          ms: [['M1', `$${V0}(${1 - p / 100})^{${t}}$`], ['A1', `$\\$${Math.round(V)}$`]], working: [`Each year the value is multiplied by $1 - \\frac{${p}}{100} = ${1 - p / 100}$`, `$${V0}\\times ${1 - p / 100}^{${t}} = ${Math.round(V)}$`],
          hint: 'Losing p% means keeping (100 − p)%.', numworks: { app: 'Calculation', lines: [[`${V0}×${1 - p / 100}^${t}`, num(sf(V, 7))]] },
          errors: [{ value: Math.round(V0 * Math.pow(1 - p / 100, t - 1)), tag: 'n-minus-1', fb: `After ${t} years the multiplier has been applied ${t} times.` }, { value: Math.round(V0 * (1 - p * t / 100)), tag: 'simple-interest', fb: 'Depreciation is a percentage of the CURRENT value each year, so it is geometric, not linear.' }],
          verify: `${V0}*(1-Rational(${p},100))**${t}` },
        { command: 'Find', prompt: 'after how many complete years the value of the car first falls below half of its original value.', marks: 3, answer: { kind: 'num', value: y, int: true, display: String(y) },
          ms: [['M1', `$${V0}(${1 - p / 100})^{n} < ${V0 / 2}$`], ['(A1)', `$n > ${num(sf(Math.log(0.5) / Math.log(1 - p / 100), 4))}$`], ['A1', `$${y}$`]],
          working: [`$(${1 - p / 100})^{n} < 0.5$`, `NumWorks: $n > ${num(sf(Math.log(0.5) / Math.log(1 - p / 100), 4))}$`, `$n = ${y}$ complete years`], hint: 'Solve the inequality with the NumWorks, then think about whole years.',
          errors: [{ value: y - 1, tag: 'round-down', fb: 'Round up: the value must have actually fallen below half.' }], verify: `next(m for m in range(1,200) if (1-Rational(${p},100))**m < Rational(1,2))` }
      ]
    };
  });

  /* ---------- 1.5 Binomial theorem: expansion and coefficients ---------- */
  reg('sl.binom1', { skill: 'SL-1.5a', title: 'Binomial coefficients and a single coefficient', paper: 1 }, R => {
    const n1 = R.int(5, 9), r1 = R.int(2, 4), n = R.int(4, 6), p = R.int(1, 3), q = R.pick([-3, -2, -1, 2, 3]), k = R.int(2, 3);
    const coef = comb(n, k) * Math.pow(p, n - k) * Math.pow(q, k);
    return {
      stem: `This question is about the binomial expansion of $(${p}${q < 0 ? ' - ' : ' + '}${Math.abs(q) === 1 ? '' : Math.abs(q)}x)^{${n}}$.`,
      parts: [
        { command: 'Find', prompt: `the value of $\\binom{${n1}}{${r1}}$.`, marks: 1, answer: { kind: 'num', value: comb(n1, r1), int: true, display: String(comb(n1, r1)) }, ms: [['A1', `$${comb(n1, r1)}$`]],
          working: [`$\\binom{${n1}}{${r1}} = \\frac{${n1}!}{${r1}!\\,${n1 - r1}!} = ${comb(n1, r1)}$`], hint: 'Use Pascal’s triangle (row ' + n1 + ') or nCr on the NumWorks.',
          errors: [{ value: comb(n1, r1) * Hub.qcore.factorial(r1), tag: 'perm-not-comb', fb: 'That is ⁿPᵣ (order matters). The binomial coefficient is ⁿCᵣ.' }], verify: `binomial(${n1},${r1})` },
        { command: 'Write down', prompt: 'the number of terms in the expansion.', marks: 1, answer: { kind: 'num', value: n + 1, int: true, display: String(n + 1) }, ms: [['A1', `$${n + 1}$`]], working: [`Powers of $x$ from $0$ to $${n}$: $${n + 1}$ terms`], hint: 'List the powers of x that appear.',
          errors: [{ value: n, tag: 'terms-n', fb: `Powers 0, 1, …, ${n} give ${n + 1} terms.` }], verify: `${n}+1` },
        { command: 'Find', prompt: `the coefficient of $x^{${k}}$.`, marks: 3, answer: { kind: 'num', value: coef, exact: true, display: String(coef) },
          ms: [['(M1)', `term $\\binom{${n}}{${k}}(${p})^{${n - k}}(${q}x)^{${k}}$`], ['A1', 'correct values of each factor'], ['A1', `$${coef}$`]],
          working: [`$\\binom{${n}}{${k}}(${p})^{${n - k}}(${q}x)^{${k}} = ${comb(n, k)}\\times ${Math.pow(p, n - k)}\\times ${paren(Math.pow(q, k))}x^{${k}}$`, `Coefficient $= ${coef}$`],
          hint: 'The x-term must be raised to the same power as x. Keep the sign inside the bracket.',
          errors: [{ value: Math.pow(p, n - k) * Math.pow(q, k), tag: 'missing-ncr', fb: `Each term needs its binomial coefficient ⁿCᵣ (here ${comb(n, k)}).` }, { value: comb(n, k) * Math.pow(p, n - k) * q, tag: 'power-on-coefficient', fb: `Raise the whole term (${q}x) to the power ${k}, including the ${q}.` }, { value: -coef, tag: 'sign', fb: 'Check the sign: a negative number raised to an even power is positive.' }],
          verify: `Poly(expand((${p}+(${q})*x)**${n}),x).coeff_monomial(x**${k})` }
      ]
    };
  });

  /* ---------- 1.5 Binomial theorem: general term, working backwards ---------- */
  reg('sl.binom2', { skill: 'SL-1.5b', title: 'General term: constant term and working backwards', paper: 1, challenge: true }, (R, o) => {
    const n = o.challenge ? R.pick([6, 9]) : R.pick([3, 6]), c = n === 9 ? R.pick([-2, -1, 1, 2]) : R.pick([-3, -2, 2, 3]), r = 2 * n / 3;
    const ct = comb(n, r) * Math.pow(c, r);
    const n2 = R.int(5, 8), a = R.int(2, 5), K = comb(n2, 2) * a * a;
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `the constant term in the expansion of $\\left(x^{2}${c < 0 ? ' - ' : ' + '}\\frac{${Math.abs(c)}}{x}\\right)^{${n}}$.`, marks: 4, answer: { kind: 'num', value: ct, exact: true, display: String(ct) },
          ms: [['M1', `general term $\\binom{${n}}{r}(x^{2})^{${n}-r}\\left(\\frac{${c}}{x}\\right)^{r}$`], ['M1', `$2(${n}-r) - r = 0$`], ['A1', `$r = ${r}$`], ['A1', `$${ct}$`]],
          working: [`$\\binom{${n}}{r}(x^{2})^{${n}-r}\\left(${c}x^{-1}\\right)^{r} = \\binom{${n}}{r}(${c})^{r}x^{${2 * n}-3r}$`, `Constant term: $${2 * n} - 3r = 0 \\Rightarrow r = ${r}$`, `$\\binom{${n}}{${r}}(${c})^{${r}} = ${comb(n, r)}\\times ${paren(Math.pow(c, r))} = ${ct}$`],
          hint: 'Write the general term and collect the powers of x. Which r makes the power zero?',
          errors: [{ value: comb(n, r), tag: 'forgot-constant-power', fb: `Don't forget the ${c} is raised to the power r as well.` }, { value: -ct, tag: 'sign', fb: 'Check the sign of the negative term raised to the power r.' }],
          verify: `expand((x**2+Rational(${c})/x)**${n}).as_coefficients_dict()[1]` },
        { command: 'Find', prompt: `the value of $a$, given that $a > 0$ and the coefficient of $x^{2}$ in the expansion of $(1 + ax)^{${n2}}$ is $${K}$.`, marks: 3, answer: { kind: 'num', value: a, exact: true, display: String(a) },
          ms: [['M1', `$\\binom{${n2}}{2}a^{2} = ${K}$`], ['A1', `$a^{2} = ${a * a}$`], ['A1', `$a = ${a}$`]],
          working: [`Term in $x^{2}$: $\\binom{${n2}}{2}(ax)^{2} = ${comb(n2, 2)}a^{2}x^{2}$`, `$${comb(n2, 2)}a^{2} = ${K} \\Rightarrow a^{2} = ${a * a}$`, `$a > 0 \\Rightarrow a = ${a}$`],
          hint: 'Write the x² term with a in it, then set its coefficient equal to the given value.', errors: [{ value: a * a, tag: 'forgot-square', fb: 'The coefficient contains a², so take the square root at the end.' }, { value: K / comb(n2, 2) / 2, tag: 'halved', fb: 'Solve a² = …, then square root.' }],
          verify: `[s for s in solve(Eq(binomial(${n2},2)*k**2,${K}),k) if s>0][0]` }
      ]
    };
  });

  /* ---------- 1.6 Simple deductive proof ---------- */
  const PROOFS = [
    a => ({ claim: `(n + ${a})^{2} - (n - ${a})^{2} \\equiv ${4 * a}n`, lines: [
      [`\\text{LHS} = (n^{2} + ${2 * a}n + ${a * a}) - (n^{2} - ${2 * a}n + ${a * a})`, `\\text{LHS} = (n^{2} + ${a * a}) - (n^{2} - ${a * a})`],
      [`= n^{2} + ${2 * a}n + ${a * a} - n^{2} + ${2 * a}n - ${a * a}`, `= n^{2} + ${2 * a}n + ${a * a} - n^{2} - ${2 * a}n + ${a * a}`],
      [`= ${4 * a}n = \\text{RHS}`, null]], py: `expand((n+${a})**2-(n-${a})**2-${4 * a}*n)==0` }),
    a => ({ claim: `\\frac{${a}}{n} - \\frac{${a}}{n + 1} \\equiv \\frac{${a}}{n(n + 1)}`, lines: [
      [`\\text{LHS} = \\frac{${a}(n + 1) - ${a}n}{n(n + 1)}`, `\\text{LHS} = \\frac{${a} - ${a}}{n - (n + 1)}`],
      [`= \\frac{${a}n + ${a} - ${a}n}{n(n + 1)}`, `= \\frac{${a}n + ${a} + ${a}n}{n(n + 1)}`],
      [`= \\frac{${a}}{n(n + 1)} = \\text{RHS}`, null]], py: `simplify(Rational(${a})/n-Rational(${a})/(n+1)-Rational(${a})/(n*(n+1)))==0` }),
    a => ({ claim: `(n + 1)^{3} - n^{3} \\equiv 3n^{2} + 3n + 1`, lines: [
      [`\\text{LHS} = (n^{3} + 3n^{2} + 3n + 1) - n^{3}`, `\\text{LHS} = (n^{3} + 1) - n^{3}`],
      [`= n^{3} + 3n^{2} + 3n + 1 - n^{3}`, `= n^{3} + 3n^{2} + 3n + 1 + n^{3}`],
      [`= 3n^{2} + 3n + 1 = \\text{RHS}`, null]], py: `expand((n+1)**3-n**3-(3*n**2+3*n+1))==0` })
  ];
  reg('sl.proof', { skill: 'SL-1.6', title: 'Deductive proof: LHS to RHS and spotting errors', paper: 1 }, R => {
    const a = R.int(2, 6), fam = R.int(0, PROOFS.length - 1), P = PROOFS[fam](a), errLine = R.int(0, 1);
    const shown = P.lines.map((l, i) => i === errLine ? l[1] : l[0]);
    const choice = mc(R, [0, 1, 2].map(i => ({ tex: `Line ${i + 1}`, key: 'L' + (i + 1) })).concat([{ tex: 'There is no error', key: 'none' }]), 'L' + (errLine + 1));
    const choiceFixed = Object.assign({}, choice); // keep labels in natural order
    const order = ['L1', 'L2', 'L3', 'none'];
    choiceFixed.choices = ['Line 1', 'Line 2', 'Line 3', 'There is no error']; choiceFixed.keys = order; choiceFixed.correct = errLine;
    const other = PROOFS[(fam + 1) % PROOFS.length](a);
    return {
      stem: `A student tries to prove that $${P.claim}$.\n` + shown.map((l, i) => `(${i + 1})  $${l}$`).join('\n'),
      parts: [
        { command: 'State', prompt: 'the number of the first line that contains an error.', marks: 1, answer: Object.assign(choiceFixed, { display: `Line ${errLine + 1}` }), ms: [['A1', `Line ${errLine + 1}`]],
          working: [`Correct line ${errLine + 1}: $${P.lines[errLine][0]}$`], hint: 'Check each line carefully: expansion first, then signs when you remove brackets.', verify: `'L${errLine + 1}' if ${P.py.replace('==0', '')}==0 else 'x'` },
        { command: 'Show that', prompt: `$${other.claim}$.`, marks: 3, answer: { kind: 'open', display: 'See markscheme' },
          ms: [['M1', 'correct expansion, or a common denominator, of the LHS'], ['A1', 'correct simplification'], ['AG', `reaching the RHS with no errors`]], working: other.lines.map(l => `$${l[0]}$`),
          hint: 'Start with the left-hand side only, and work step by step until you reach the right-hand side.', verify: `${other.py}` }
      ]
    };
  });

  /* ---------- 2.1 What is a function ---------- */
  reg('sl.function', { skill: 'SL-2.1', title: 'Relations and functions', paper: 1 }, R => {
    const mkSet = isFn => { const xs = R.distinct(4, -3, 6); const pts = xs.map(x => [x, R.int(-5, 9)]); if (!isFn) pts[3] = [pts[R.int(0, 2)][0], pts[3][1] + 1 + R.int(0, 3)]; return pts; };
    const sets = [mkSet(true), mkSet(false), mkSet(false), mkSet(false)];
    const opts = sets.map((s, i) => ({ tex: `$\\{${s.map(p => `(${p[0]},\\,${p[1]})`).join(',\\,')}\\}$`, key: i === 0 ? 'fn' : 'no' + i, py: `[${s.map(p => `(${p[0]},${p[1]})`).join(',')}]` }));
    const c = R.int(1, 5), m = mc(R, [{ tex: `$y = x^{2} + ${c}$`, key: 'a' }, { tex: `$x = y^{2} + ${c}$`, key: 'b' }, { tex: `$y = \\sqrt{x + ${c}}$`, key: 'c' }, { tex: `$y = |x - ${c}|$`, key: 'd' }], 'b');
    return {
      stem: '',
      parts: [
        { command: 'State', prompt: 'which one of these relations is a function.', marks: 1, answer: Object.assign(mc(R, opts, 'fn'), { display: opts[0].tex }), ms: [['A1', 'the set in which every input appears exactly once']],
          working: ['A relation is a function when each input ($x$-value) has exactly one output. In the other sets, an $x$-value repeats with a different $y$-value.'], hint: 'Look for an x-value that is paired with two different y-values.',
          verify: `'fn' if len(set(p[0] for p in ${opts[0].py}))==len(${opts[0].py}) else 'x'` },
        { command: 'State', prompt: 'which equation does NOT define $y$ as a function of $x$.', marks: 1, answer: Object.assign(m, { display: `x = y^{2} + ${c}` }), ms: [['A1', `$x = y^{2} + ${c}$`]],
          working: [`For $x = ${c + 1}$: $y^{2} = 1$, so $y = 1$ or $y = -1$ — one input, two outputs.`], hint: 'Try one x-value in each equation. Do you get more than one y?', verify: `'b' if len(solve(Eq(${c}+1, y**2+${c}), y))==2 else 'x'` }
      ]
    };
  });

  /* ---------- 2.2 Function notation ---------- */
  reg('sl.notation', { skill: 'SL-2.2', title: 'Function notation: evaluate and solve', paper: 1 }, R => {
    const a = R.pick([1, 2]), [s1, s2] = R.distinct(2, -6, 6), k = R.int(-5, 10), b = -a * (s1 + s2), c = a * s1 * s2 + k, p = R.nz(-4, 4);
    const f = poly([[a, 'x^{2}'], [b, 'x'], [c, '']]), fp = a * p * p + b * p + c;
    return {
      stem: `Let $f(x) = ${f}$.`,
      parts: [
        { command: 'Find', prompt: `$f(${p})$.`, marks: 2, answer: { kind: 'num', value: fp, exact: true, display: String(fp) },
          ms: [['M1', `$${a === 1 ? '' : a}(${p})^{2} ${sgn(b)}(${p}) ${sgn(c)}$`], ['A1', `$${fp}$`]], working: [`$f(${p}) = ${a === 1 ? '' : a}(${p})^{2} ${sgn(b)}(${p}) ${sgn(c)} = ${fp}$`],
          hint: 'Put brackets round the input before squaring.', errors: p < 0 ? [{ value: -a * p * p + b * p + c, tag: 'negative-squared', fb: `(${p})² is positive: brackets matter when you square a negative.` }] : [], verify: `${a}*(${p})**2+(${b})*(${p})+(${c})` },
        { command: 'Solve', prompt: `$f(x) = ${k}$.`, marks: 3, answer: { kind: 'list', value: [s1, s2], exact: true, markEach: true, display: `x = ${s1}\\text{ or }x = ${s2}` },
          ms: [['M1', `$${poly([[a, 'x^{2}'], [b, 'x'], [c - k, '']])} = 0$`], ['A1', `$x = ${s1}$`], ['A1', `$x = ${s2}$`]],
          working: [`$${poly([[a, 'x^{2}'], [b, 'x'], [c - k, '']])} = 0$`, `$${a === 1 ? '' : a}(x ${sgn(-s1)})(x ${sgn(-s2)}) = 0$`, `$x = ${s1}$ or $x = ${s2}$`],
          hint: 'Rearrange so one side is zero, then factorise.', errors: [{ value: [-s1, -s2], tag: 'root-signs', fb: 'If (x − 3) is a factor, the solution is x = +3.' }], verify: `solve(Eq(${a}*x**2+(${b})*x+(${c}),${k}),x)` }
      ]
    };
  });

  /* ---------- 2.4 Domain and range ---------- */
  reg('sl.domain', { skill: 'SL-2.4', title: 'Domain and range', paper: 1 }, R => {
    const a = R.int(2, 5), b = R.int(1, 9), m = fr(b, a), c = R.nz(-6, 6), d = R.nz(-5, 5), e = R.nz(-4, 7), p = R.nz(-4, 4), q = R.int(-6, 8);
    return {
      stem: `Let $f(x) = \\sqrt{${a}x - ${b}}$ and $g(x) = \\frac{${c}}{x ${sgn(-d)}} ${sgn(e)}$, $x \\ne ${d}$.`,
      parts: [
        { command: 'Find', prompt: 'the largest possible domain of $f$. Give the least value of $x$.', marks: 2, answer: { kind: 'num', value: m.val(), exact: true, display: `x \\ge ${m.tex()}` },
          ms: [['M1', `$${a}x - ${b} \\ge 0$`], ['A1', `$x \\ge ${m.tex()}$`]], working: [`$${a}x - ${b} \\ge 0 \\Rightarrow x \\ge ${m.tex()}$`], hint: 'The expression under a square root cannot be negative.',
          errors: [{ value: -m.val(), tag: 'sign', fb: 'Solve $ax - b \\ge 0$ carefully: $x \\ge \\frac{b}{a}$.' }, { value: b * a, tag: 'multiplied', fb: 'Divide by the coefficient of x.' }], verify: `solve(${a}*x-${b},x)[0]` },
        { command: 'Write down', prompt: 'the value of $x$ that is excluded from the domain of $g$.', marks: 1, answer: { kind: 'num', value: d, exact: true, display: `x = ${d}` }, ms: [['A1', `$${d}$`]], working: [`The denominator $x ${sgn(-d)}$ is zero when $x = ${d}$.`],
          hint: 'You cannot divide by zero.', errors: [{ value: -d, tag: 'sign', fb: `x ${sgn(-d)} = 0 gives x = ${d}.` }], verify: `solve(x-(${d}),x)[0]` },
        { command: 'Write down', prompt: 'the value of $y$ that is not in the range of $g$.', marks: 1, answer: { kind: 'num', value: e, exact: true, display: `y = ${e}` }, ms: [['A1', `$${e}$`]], working: [`$\\frac{${c}}{x ${sgn(-d)}}$ can never equal $0$, so $g(x)$ can never equal $${e}$ (horizontal asymptote).`],
          hint: 'Which value can the fraction never take?', verify: `limit(${c}/(x-(${d}))+(${e}),x,oo)` },
        { command: 'Write down', prompt: `the minimum value of $h(x) = (x ${sgn(-p)})^{2} ${sgn(q)}$, $x\\in\\mathbb{R}$.`, marks: 1, answer: { kind: 'num', value: q, exact: true, display: `h(x) \\ge ${q}` }, ms: [['A1', `$${q}$`]],
          working: [`A square is never negative, so the least value is when $x = ${p}$: $h = ${q}$. Range: $h(x) \\ge ${q}$.`], hint: 'What is the smallest a squared bracket can be?', verify: `minimum((x-(${p}))**2+(${q}),x)` }
      ]
    };
  });

  /* ---------- 2.5 Composite functions ---------- */
  reg('sl.composite', { skill: 'SL-2.5', title: 'Composite functions', paper: 1 }, R => {
    const a = R.pick([-3, -2, 2, 3, 4]), b = R.nz(-6, 6), c = R.int(1, 6), p = R.nz(-3, 4), x0 = R.int(2, 6);
    const fog = v => a * (v * v - c) + b, gof = v => Math.pow(a * v + b, 2) - c, K = fog(x0);
    return {
      stem: `Let $f(x) = ${lin(a, b)}$ and $g(x) = x^{2} - ${c}$.`,
      parts: [
        { command: 'Find', prompt: `$(f\\circ g)(${p})$.`, marks: 2, answer: { kind: 'num', value: fog(p), exact: true, display: String(fog(p)) },
          ms: [['M1', `$g(${p}) = ${p * p - c}$`], ['A1', `$f(${p * p - c}) = ${fog(p)}$`]], working: [`$g(${p}) = (${p})^{2} - ${c} = ${p * p - c}$`, `$f(${p * p - c}) = ${a}(${p * p - c}) ${sgn(b)} = ${fog(p)}$`],
          hint: '(f∘g)(x) means f(g(x)): apply g FIRST.', errors: [{ value: gof(p), tag: 'order-of-composition', fb: 'You found g(f(x)). In (f∘g)(x), g acts first.' }], verify: `(${a}*x+(${b})).subs(x,(${p})**2-${c})` },
        { command: 'Find', prompt: '$(g\\circ f)(x)$, giving your answer in the form $px^{2} + qx + r$.', marks: 3, answer: { kind: 'tuple', labels: ['p', 'q', 'r'], value: [a * a, 2 * a * b, b * b - c], exact: true, markEach: true, display: poly([[a * a, 'x^{2}'], [2 * a * b, 'x'], [b * b - c, '']]) },
          ms: [['M1', `$(${lin(a, b)})^{2} - ${c}$`], ['A1', 'correct expansion'], ['A1', `$${poly([[a * a, 'x^{2}'], [2 * a * b, 'x'], [b * b - c, '']])}$`]],
          working: [`$g(f(x)) = (${lin(a, b)})^{2} - ${c}$`, `$= ${poly([[a * a, 'x^{2}'], [2 * a * b, 'x'], [b * b, '']])} - ${c}$`, `$= ${poly([[a * a, 'x^{2}'], [2 * a * b, 'x'], [b * b - c, '']])}$`],
          hint: 'Substitute the whole of f(x) for x in g, then expand the bracket squared.', errors: [{ value: [a * a, 0, b * b - c], tag: 'square-of-sum', fb: '(a + b)² = a² + 2ab + b²: don’t forget the middle term.' }],
          verify: `tuple(Poly(expand((${a}*x+(${b}))**2-${c}),x).all_coeffs())` },
        { command: 'Solve', prompt: `$(f\\circ g)(x) = ${K}$.`, marks: 3, answer: { kind: 'list', value: [x0, -x0], exact: true, markEach: true, display: `x = \\pm ${x0}` },
          ms: [['M1', `$${a}(x^{2} - ${c}) ${sgn(b)} = ${K}$`], ['A1', `$x^{2} = ${x0 * x0}$`], ['A1', `$x = \\pm ${x0}$`]],
          working: [`$${a}(x^{2} - ${c}) ${sgn(b)} = ${K}$`, `$x^{2} - ${c} = ${x0 * x0 - c}$`, `$x^{2} = ${x0 * x0} \\Rightarrow x = \\pm ${x0}$`], hint: 'There are two solutions when you square root.',
          errors: [], verify: `solve(Eq(${a}*(x**2-${c})+(${b}),${K}),x)` }
      ]
    };
  });

  /* ---------- 2.6 Inverse functions ---------- */
  reg('sl.inverse', { skill: 'SL-2.6', title: 'Inverse functions', paper: 1 }, R => {
    const p = R.pick([-4, -3, -2, 2, 3, 4, 5]), q = R.nz(-9, 9), K = R.int(-10, 15), a = R.nz(-6, 8), b = R.nz(-4, 4), K2 = R.pick([-3, -2, -1, 1, 2, 3, 4]);
    const finvK = fr(K - q, p), ginvK = fr(a, K2).add(b);
    return {
      stem: `Let $f(x) = ${lin(p, q)}$ and $g(x) = \\frac{${a}}{x ${sgn(-b)}}$, $x \\ne ${b}$.`,
      parts: [
        { command: 'Find', prompt: `$f^{-1}(x)$, giving your answer in the form $mx + c$.`, marks: 2, answer: { kind: 'tuple', labels: ['m', 'c'], value: [1 / p, -q / p], exact: true, markEach: true, display: `${fr(1, p).tex()}x ${sgn(fr(-q, p))}` },
          ms: [['M1', `$x = ${lin(p, q, 'y')}$`], ['A1', `$f^{-1}(x) = ${poly([[fr(1, p), 'x'], [fr(-q, p), '']])}$`]],
          working: [`Swap $x$ and $y$: $x = ${lin(p, q, 'y')}$`, `$y = \\frac{x ${sgn(-q)}}{${p}} = ${poly([[fr(1, p), 'x'], [fr(-q, p), '']])}$`], hint: 'Write y = f(x), swap x and y, then make y the subject.',
          errors: [{ value: [1 / p, q / p], tag: 'inverse-sign', fb: 'Undo the addition with a subtraction.' }], verify: `tuple(Poly(solve(Eq(x,${p}*y+(${q})),y)[0],x).all_coeffs())` },
        { command: 'Find', prompt: `$f^{-1}(${K})$.`, marks: 1, answer: { kind: 'num', value: finvK.val(), exact: true, display: finvK.tex() }, ms: [['A1', `$${finvK.tex()}$`]], working: [`$f^{-1}(${K}) = \\frac{${K} ${sgn(-q)}}{${p}} = ${finvK.tex()}$`],
          hint: 'Use your answer to (a), or solve f(x) = ' + K + '.', errors: [{ value: 1 / (p * K + q), tag: 'reciprocal-not-inverse', fb: '$f^{-1}$ is the inverse function, not $\\frac{1}{f(x)}$.' }, { value: p * K + q, tag: 'applied-f', fb: 'You applied f, not its inverse.' }], verify: `solve(Eq(${p}*x+(${q}),${K}),x)[0]` },
        { command: 'Find', prompt: `$g^{-1}(${K2})$.`, marks: 2, answer: { kind: 'num', value: ginvK.val(), exact: true, display: ginvK.tex() },
          ms: [['M1', `$${K2} = \\frac{${a}}{x ${sgn(-b)}}$`], ['A1', `$${ginvK.tex()}$`]], working: [`Solve $g(x) = ${K2}$: $x ${sgn(-b)} = \\frac{${a}}{${K2}}$`, `$x = ${ginvK.tex()}$`],
          hint: 'g⁻¹(k) is the x-value that g sends to k.', errors: [{ value: a / (K2 - b), tag: 'applied-f', fb: 'You worked out g(' + K2 + '). Solve g(x) = ' + K2 + ' instead.' }], verify: `solve(Eq(${a}/(x-(${b})),${K2}),x)[0]` },
        { command: 'Write down', prompt: `$(f\\circ f^{-1})(${K + 7})$.`, marks: 1, answer: { kind: 'num', value: K + 7, exact: true, display: String(K + 7) }, ms: [['A1', `$${K + 7}$`]], working: ['$f$ undoes $f^{-1}$, so $(f\\circ f^{-1})(x) = x$.'], hint: 'What does applying a function after its inverse do?', verify: `${K}+7` }
      ]
    };
  });

  /* ---------- 3.1–3.2 Linear functions ---------- */
  reg('sl.lines', { skill: 'SL-3.1', title: 'Gradient, perpendicular lines and midpoints', paper: 1 }, R => {
    let x1, y1, x2, y2; do { x1 = R.int(-6, 5); y1 = R.int(-6, 8); x2 = R.int(-5, 8); y2 = R.int(-6, 9); } while (x1 === x2 || y1 === y2);
    const m = fr(y2 - y1, x2 - x1), mp = fr(-1).div(m), c = fr(y1).sub(mp.mul(x1));
    return {
      stem: `The points $A(${x1},\\,${y1})$ and $B(${x2},\\,${y2})$ are shown on a coordinate grid.`,
      parts: [
        { command: 'Find', prompt: 'the gradient of $AB$.', marks: 2, answer: { kind: 'num', value: m.val(), exact: true, display: m.tex() },
          ms: [['M1', `$\\frac{${y2} - ${paren(y1)}}{${x2} - ${paren(x1)}}$`], ['A1', `$${m.tex()}$`]], working: [`$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{${y2 - y1}}{${x2 - x1}} = ${m.tex()}$`],
          hint: 'Change in y over change in x.', errors: [{ value: fr(x2 - x1, y2 - y1).val(), tag: 'inverted-gradient', fb: 'Gradient is rise ÷ run: change in y on top.' }], verify: `Rational(${y2}-(${y1}),${x2}-(${x1}))` },
        { command: 'Write down', prompt: 'the coordinates of the midpoint of $AB$.', marks: 1, answer: { kind: 'tuple', labels: ['x', 'y'], value: [(x1 + x2) / 2, (y1 + y2) / 2], exact: true, display: `\\left(${fr(x1 + x2, 2).tex()},\\,${fr(y1 + y2, 2).tex()}\\right)` },
          ms: [['A1', `$\\left(${fr(x1 + x2, 2).tex()},\\,${fr(y1 + y2, 2).tex()}\\right)$`]], working: [`Average the coordinates: $\\left(\\frac{${x1} + ${paren(x2)}}{2},\\,\\frac{${y1} + ${paren(y2)}}{2}\\right)$`], hint: 'Midpoint = average of the x’s, average of the y’s.', verify: `(Rational(${x1 + x2},2),Rational(${y1 + y2},2))` },
        { command: 'Find', prompt: 'the equation of the line $L$ that passes through $A$ and is perpendicular to $AB$. Give your answer in the form $y = mx + c$.', marks: 3, answer: { kind: 'tuple', labels: ['m', 'c'], value: [mp.val(), c.val()], exact: true, markEach: true, display: `y = ${poly([[mp, 'x'], [c, '']])}` },
          ms: [['M1', `$m_\\perp = ${mp.tex()}$`], ['M1', `$y ${sgn(-y1)} = ${mp.tex()}(x ${sgn(-x1)})$`], ['A1', `$y = ${poly([[mp, 'x'], [c, '']])}$`]],
          working: [`$m_\\perp = -\\frac{1}{m} = ${mp.tex()}$`, `$y - ${paren(y1)} = ${mp.tex()}\\left(x - ${paren(x1)}\\right)$`, `$y = ${poly([[mp, 'x'], [c, '']])}$`],
          hint: 'Perpendicular gradients multiply to −1.', errors: [{ value: [m.val(), fr(y1).sub(m.mul(x1)).val()], tag: 'parallel-not-perpendicular', fb: 'You used the same gradient (that gives a parallel line). Perpendicular: $m_\\perp = -\\frac{1}{m}$.' }, { value: [fr(1).div(m).val(), fr(y1).sub(fr(1).div(m).mul(x1)).val()], tag: 'reciprocal-no-sign', fb: 'Take the negative reciprocal: change the sign as well as flipping.' }],
          verify: `(-1/Rational(${y2}-(${y1}),${x2}-(${x1})), ${y1}+1/Rational(${y2}-(${y1}),${x2}-(${x1}))*(${x1}))` }
      ]
    };
  });

  /* ---------- 3.3 Transformations ---------- */
  reg('sl.transform', { skill: 'SL-3.3', title: 'Transformations of graphs: images of a point', paper: 1 }, R => {
    const p = R.nz(-5, 6), q = R.nz(-5, 6), h = R.nz(-4, 4), k = R.nz(-5, 5), a = R.pick([2, 3, -2, -1]), b = R.pick([2, 3, 4]);
    return {
      stem: `The point $P(${p},\\,${q})$ lies on the graph of $y = f(x)$. Write down the coordinates of the image of $P$ on each graph.`,
      parts: [
        { command: 'Write down', prompt: `$y = f(x ${sgn(-h)}) ${sgn(k)}$`, marks: 2, answer: { kind: 'tuple', labels: ['x', 'y'], value: [p + h, q + k], exact: true, markEach: true, display: `(${p + h},\\,${q + k})` },
          ms: [['A1', `$x = ${p + h}$`], ['A1', `$y = ${q + k}$`]], working: [`Translation by $\\binom{${h}}{${k}}$: $(${p} ${sgn(h)},\\,${q} ${sgn(k)}) = (${p + h},\\,${q + k})$`], hint: 'Inside the bracket acts on x in the OPPOSITE way to how it looks.',
          errors: [{ value: [p - h, q + k], tag: 'translation-direction', fb: `f(x − ${h}) moves the graph ${h > 0 ? 'right' : 'left'} by ${Math.abs(h)}.` }], verify: `(${p}+(${h}),${q}+(${k}))` },
        { command: 'Write down', prompt: `$y = ${a === -1 ? '-' : a}f(x)$`, marks: 1, answer: { kind: 'tuple', labels: ['x', 'y'], value: [p, a * q], exact: true, display: `(${p},\\,${a * q})` }, ms: [['A1', `$(${p},\\,${a * q})$`]],
          working: [`Vertical ${a === -1 ? 'reflection in the x-axis' : `stretch, scale factor ${a}`}: multiply the $y$-coordinate by $${a}$.`], hint: 'Outside the function acts on y as it looks.', verify: `(${p},${a}*(${q}))` },
        { command: 'Write down', prompt: `$y = f(${b}x)$`, marks: 1, answer: { kind: 'tuple', labels: ['x', 'y'], value: [p / b, q], exact: true, display: `\\left(${fr(p, b).tex()},\\,${q}\\right)` }, ms: [['A1', `$\\left(${fr(p, b).tex()},\\,${q}\\right)$`]],
          working: [`Horizontal stretch, scale factor $\\frac{1}{${b}}$: divide the $x$-coordinate by $${b}$.`], hint: 'f(bx) squashes the graph towards the y-axis.', errors: [{ value: [p * b, q], tag: 'horizontal-stretch-factor', fb: `$f(${b}x)$ is a stretch by factor $\\frac{1}{${b}}$: divide $x$ by $${b}$.` }], verify: `(Rational(${p},${b}),${q})` }
      ]
    };
  });

  /* ---------- 3.4 Graphing quadratics ---------- */
  reg('sl.vertex', { skill: 'SL-3.4', title: 'Quadratic graphs: axis, vertex and intercepts', paper: 1 }, R => {
    const a = R.pick([1, 2, -1, 3, -2]), h = R.nz(-5, 5), k = R.int(-9, 9), b = -2 * a * h, c = a * h * h + k;
    return {
      stem: `The graph of $y = ${poly([[a, 'x^{2}'], [b, 'x'], [c, '']])}$ is a parabola.`,
      parts: [
        { command: 'Find', prompt: 'the equation of the axis of symmetry.', marks: 2, answer: { kind: 'num', value: h, exact: true, display: `x = ${h}` }, ms: [['M1', `$x = -\\frac{${b}}{2(${a})}$`], ['A1', `$x = ${h}$`]], working: [`$x = -\\frac{b}{2a} = -\\frac{${b}}{${2 * a}} = ${h}$`],
          hint: 'Axis of symmetry: $x = -\\frac{b}{2a}$, in the formula booklet.', errors: [{ value: -h, tag: 'axis-sign', fb: 'Remember the minus sign in $x = -\\frac{b}{2a}$.' }], verify: `-Rational(${b},2*${a})` },
        { command: 'Write down', prompt: 'the coordinates of the vertex.', marks: 1, answer: { kind: 'tuple', labels: ['x', 'y'], value: [h, k], exact: true, display: `(${h},\\,${k})` }, ms: [['A1', `$(${h},\\,${k})$`]], working: [`$y(${h}) = ${k}$`], hint: 'Substitute your axis value into the equation.', verify: `(${h}, (${a}*x**2+(${b})*x+(${c})).subs(x,${h}))` },
        { command: 'Write down', prompt: 'the $y$-intercept.', marks: 1, answer: { kind: 'num', value: c, exact: true, display: String(c) }, ms: [['A1', `$${c}$`]], working: ['Set $x = 0$.'], hint: 'Where does the graph cross the y-axis?', verify: `${c}` },
        { command: 'State', prompt: 'whether the vertex is a maximum or a minimum point.', marks: 1, answer: Object.assign(mc(R, [{ tex: 'Maximum', key: 'max' }, { tex: 'Minimum', key: 'min' }], a < 0 ? 'max' : 'min'), { display: a < 0 ? 'Maximum' : 'Minimum' }),
          ms: [['A1', a < 0 ? 'maximum, since $a < 0$' : 'minimum, since $a > 0$']], working: [`$a = ${a} ${a < 0 ? '< 0' : '> 0'}$: the parabola opens ${a < 0 ? 'downwards' : 'upwards'}.`], hint: 'Look at the sign of the x² coefficient.', verify: `'max' if ${a}<0 else 'min'` }
      ]
    };
  });

  /* ---------- 3.5 Solving quadratics ---------- */
  reg('sl.solvequad', { skill: 'SL-3.5', title: 'Factorising and completing the square', paper: 1 }, R => {
    const [r1, r2] = R.distinct(2, -7, 7, [0]), a = R.pick([1, 2, 3]), h = R.nz(-4, 4), k = R.nz(-9, 9);
    return {
      stem: '',
      parts: [
        { command: 'Solve', prompt: `$${poly([[1, 'x^{2}'], [-(r1 + r2), 'x'], [r1 * r2, '']])} = 0$.`, marks: 2, answer: { kind: 'list', value: [r1, r2], exact: true, markEach: true, display: `x = ${r1},\\ x = ${r2}` },
          ms: [['M1', `$(x ${sgn(-r1)})(x ${sgn(-r2)}) = 0$`], ['A1', `$x = ${r1},\\ x = ${r2}$`]], working: [`Two numbers that multiply to $${r1 * r2}$ and add to $${-(r1 + r2)}$: $${-r1}$ and $${-r2}$`, `$(x ${sgn(-r1)})(x ${sgn(-r2)}) = 0 \\Rightarrow x = ${r1}$ or $x = ${r2}$`],
          hint: 'Find two numbers that multiply to give the constant and add to give the x-coefficient.', errors: [{ value: [-r1, -r2], tag: 'root-signs', fb: 'If (x + 3) = 0 then x = −3. Change the sign.' }], verify: `solve(x**2-(${r1 + r2})*x+(${r1 * r2}),x)` },
        { command: 'Write', prompt: `$${poly([[a, 'x^{2}'], [-2 * a * h, 'x'], [a * h * h + k, '']])}$ in the form $a(x - h)^{2} + k$.`, marks: 3, answer: { kind: 'tuple', labels: ['a', 'h', 'k'], value: [a, h, k], exact: true, markEach: true, display: `${a === 1 ? '' : a}(x ${sgn(-h)})^{2} ${sgn(k)}` },
          ms: [['A1', `$a = ${a}$`], ['A1', `$h = ${h}$`], ['A1', `$k = ${k}$`]],
          working: [`$${a === 1 ? '' : a + '\\left('}x^{2} ${sgn(-2 * h)}x${a === 1 ? '' : '\\right)'} ${sgn(a * h * h + k)}$`, `$= ${a === 1 ? '' : a}(x ${sgn(-h)})^{2} - ${a * h * h} ${sgn(a * h * h + k)}$`, `$= ${a === 1 ? '' : a}(x ${sgn(-h)})^{2} ${sgn(k)}$`],
          hint: 'Take out a first, then halve the x-coefficient inside the bracket.', errors: [{ value: [a, -h, k], tag: 'vertex-sign', fb: 'In a(x − h)², h has the opposite sign to the number in the bracket.' }], verify: `(${a}, ${h}, expand(${a}*x**2-2*${a}*(${h})*x+${a * h * h + k} - ${a}*(x-(${h}))**2))` }
      ]
    };
  });

  /* ---------- 3.6 Quadratic formula and discriminant ---------- */
  reg('sl.discriminant', { skill: 'SL-3.6', title: 'The discriminant and exact roots', paper: 1, challenge: true }, (R, o) => {
    const m = R.int(2, 7), b = R.pick([4, 6, 8, 10]), p = R.int(1, 5), s = R.pick([2, 3, 5, 6, 7]);
    const q = p * p - s; // x^2 - 2p x + q = 0 → x = p ± √s
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `the values of $k$ for which $x^{2} + kx + ${m * m} = 0$ has two equal roots.`, marks: 3, answer: { kind: 'list', value: [2 * m, -2 * m], exact: true, markEach: true, display: `k = \\pm ${2 * m}` },
          ms: [['M1', '$\\Delta = b^{2} - 4ac = 0$'], ['A1', `$k^{2} - ${4 * m * m} = 0$`], ['A1', `$k = \\pm ${2 * m}$`]], working: [`$\\Delta = k^{2} - 4(1)(${m * m}) = 0$`, `$k^{2} = ${4 * m * m} \\Rightarrow k = \\pm ${2 * m}$`],
          hint: 'Equal roots means the discriminant is zero.', errors: [{ value: [2 * m], tag: 'missing-negative-root', fb: 'k² = … has a negative solution too.' }], verify: `solve(k**2-4*${m * m},k)` },
        { command: 'Find', prompt: `the set of values of $c$ for which $x^{2} - ${b}x + c = 0$ has two distinct real roots. Give the boundary value $t$, where $c < t$.`, marks: 3, answer: { kind: 'num', value: b * b / 4, exact: true, display: `c < ${fr(b * b, 4).tex()}` },
          ms: [['M1', '$\\Delta > 0$'], ['A1', `$${b * b} - 4c > 0$`], ['A1', `$c < ${fr(b * b, 4).tex()}$`]], working: [`$\\Delta = (-${b})^{2} - 4(1)(c) > 0$`, `$${b * b} > 4c \\Rightarrow c < ${fr(b * b, 4).tex()}$`],
          hint: 'Two distinct real roots: Δ > 0.', errors: [{ value: b * b, tag: 'forgot-4ac', fb: 'Δ = b² − 4ac: remember the 4.' }], verify: `solve(Eq(${b}**2-4*k,0),k)[0]` },
        { command: 'Solve', prompt: `$x^{2} - ${2 * p}x ${sgn(q)} = 0$, giving your answers in exact form.`, marks: 3, answer: { kind: 'list', value: [p + Math.sqrt(s), p - Math.sqrt(s)], exact: true, markEach: true, display: `x = ${p} \\pm \\sqrt{${s}}` },
          ms: [['M1', `$x = \\frac{${2 * p} \\pm \\sqrt{${4 * p * p} - 4(${q})}}{2}$`], ['A1', `$\\frac{${2 * p} \\pm \\sqrt{${4 * s}}}{2}$`], ['A1', `$${p} \\pm \\sqrt{${s}}$`]],
          working: [`$x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a} = \\frac{${2 * p} \\pm \\sqrt{${4 * s}}}{2}$`, `$= \\frac{${2 * p} \\pm 2\\sqrt{${s}}}{2} = ${p} \\pm \\sqrt{${s}}$`],
          hint: 'Use the quadratic formula and simplify the surd. Type answers like 3+sqrt(5).', errors: [], verify: `solve(x**2-${2 * p}*x+(${q}),x)` }
      ]
    };
  });

  /* ---------- 3.7 Applications of quadratics ---------- */
  reg('sl.quadapp', { skill: 'SL-3.7', title: 'Quadratic models: projectile', paper: 2 }, R => {
    const v = R.int(12, 28), h0 = R.pick([1.2, 1.5, 1.8, 2]), H = h0 + v * v / 19.6, tm = v / 9.8;
    const tg = (v + Math.sqrt(v * v + 4 * 4.9 * h0)) / 9.8;
    return {
      stem: `A ball is thrown upwards. Its height, in metres, after $t$ seconds is $h(t) = -4.9t^{2} + ${v}t + ${h0}$.`,
      parts: [
        { command: 'Write down', prompt: 'the height from which the ball is thrown.', marks: 1, answer: { kind: 'num', value: h0, display: `${h0}\\text{ m}` }, ms: [['A1', `$${h0}$ m`]], working: ['$h(0)$'], hint: 'What happens when t = 0?', verify: `${h0}` },
        { command: 'Find', prompt: 'the maximum height of the ball.', marks: 2, answer: { kind: 'num', value: H, sf: 3, display: `${num(sf(H, 3))}\\text{ m}` }, ms: [['(M1)', `$t = \\frac{${v}}{9.8}$ or NumWorks maximum`], ['A1', `$${num(sf(H, 3))}$ m`]],
          working: [`Vertex at $t = -\\frac{b}{2a} = \\frac{${v}}{9.8} = ${num(sf(tm, 4))}$`, `$h = ${num(sf(H, 3))}$ m`], hint: 'Use the axis of symmetry or the NumWorks Grapher (Maximum).', numworks: { app: 'Grapher', lines: [[`y=-4.9x^2+${v}x+${h0}`, ''], ['Maximum', `x=${num(sf(tm, 4))}  y=${num(sf(H, 4))}`]] },
          errors: [{ value: tm, tag: 'time-not-height', fb: 'That is the TIME of the maximum. The question asks for the height.' }], verify: `maximum(-Rational(49,10)*t**2+${v}*t+Rational(${Math.round(h0 * 10)},10),t)` },
        { command: 'Find', prompt: 'the time at which the ball hits the ground.', marks: 2, answer: { kind: 'num', value: tg, sf: 3, display: `${num(sf(tg, 3))}\\text{ s}` }, ms: [['(M1)', '$h(t) = 0$'], ['A1', `$t = ${num(sf(tg, 3))}$ s`]],
          working: [`Solve $-4.9t^{2} + ${v}t + ${h0} = 0$ on the NumWorks`, `Reject the negative root: $t = ${num(sf(tg, 3))}$ s`], hint: 'The ground is h = 0. Which root makes sense?', numworks: { app: 'Equations', lines: [[`-4.9x^2+${v}x+${h0}=0`, `x=${num(sf(tg, 4))}`]] },
          errors: [{ value: 2 * tm, tag: 'ignored-start-height', fb: 'The ball starts above the ground, so it lands slightly after 2 × (time to the top).' }], verify: `max(solve(-Rational(49,10)*t**2+${v}*t+Rational(${Math.round(h0 * 10)},10),t))` }
      ]
    };
  });

  /* ---------- 4 Rational functions ---------- */
  reg('sl.rational', { skill: 'SL-4.1', title: 'Rational functions: asymptotes and intercepts', paper: 1 }, R => {
    let a, b, c, d; do { a = R.nz(-5, 6); b = R.nz(-8, 8); c = R.pick([1, 2, 3, -1, -2]); d = R.nz(-6, 6); } while (a * d === b * c);
    return {
      stem: `Let $f(x) = \\frac{${lin(a, b)}}{${lin(c, d)}}$, $x \\ne ${fr(-d, c).tex()}$.`,
      parts: [
        { command: 'Write down', prompt: 'the equation of the vertical asymptote.', marks: 1, answer: { kind: 'num', value: -d / c, exact: true, display: `x = ${fr(-d, c).tex()}` }, ms: [['A1', `$x = ${fr(-d, c).tex()}$`]], working: [`Denominator zero: $${lin(c, d)} = 0$`], hint: 'Where is the denominator zero?', errors: [{ value: d / c, tag: 'sign', fb: 'Solve cx + d = 0 carefully.' }], verify: `solve(${c}*x+(${d}),x)[0]` },
        { command: 'Write down', prompt: 'the equation of the horizontal asymptote.', marks: 1, answer: { kind: 'num', value: a / c, exact: true, display: `y = ${fr(a, c).tex()}` }, ms: [['A1', `$y = ${fr(a, c).tex()}$`]], working: [`For large $|x|$: $f(x) \\to \\frac{${a}}{${c}}$`], hint: 'Compare the coefficients of x.', errors: [{ value: b / d, tag: 'constants-not-leading', fb: 'Use the coefficients of x (the leading terms), not the constants.' }], verify: `limit((${a}*x+(${b}))/(${c}*x+(${d})),x,oo)` },
        { command: 'Find', prompt: 'the coordinates of the $x$-intercept.', marks: 1, answer: { kind: 'num', value: -b / a, exact: true, display: `\\left(${fr(-b, a).tex()},\\,0\\right)` }, ms: [['A1', `$x = ${fr(-b, a).tex()}$`]], working: [`Numerator zero: $${lin(a, b)} = 0$`], hint: 'A fraction is zero when its numerator is zero.', verify: `solve(${a}*x+(${b}),x)[0]` },
        { command: 'Find', prompt: 'the $y$-intercept.', marks: 1, answer: { kind: 'num', value: b / d, exact: true, display: fr(b, d).tex() }, ms: [['A1', `$${fr(b, d).tex()}$`]], working: [`$f(0) = \\frac{${b}}{${d}}$`], hint: 'Set x = 0.', verify: `Rational(${b},${d})` }
      ]
    };
  });

  /* ---------- 5 Differentiation ---------- */
  reg('sl.deriv', { skill: 'SL-5.2', title: 'Derivatives, tangents and normals', paper: 1 }, R => {
    let a, n, b, p; do { a = R.pick([1, 2, 3]); n = R.pick([2, 3]); b = R.pick([-8, -6, -4, 4, 6, 8]); p = R.pick([1, 2, -1, -2]); } while (a * n * Math.pow(p, n - 1) * p * p === b);
    const y0 = fr(a * Math.pow(p, n)).add(fr(b, p)), mF = fr(a * n * Math.pow(p, n - 1)).sub(fr(b, p * p)), c = y0.sub(mF.mul(p));
    return {
      stem: `Let $f(x) = ${a === 1 ? '' : a}x^{${n}} ${sgn(b).replace(/(\d+)$/, '\\frac{$1}{x}')}$, $x \\ne 0$.`,
      parts: [
        { command: 'Find', prompt: `$f'(x)$ and hence $f'(${p})$.`, marks: 3, answer: { kind: 'num', value: mF.val(), exact: true, display: mF.tex() },
          ms: [['A1', `$${a * n}x^{${n - 1}}$`], ['A1', `$${-b < 0 ? '-' : ''}${Math.abs(b)}x^{-2}$`], ['A1', `$f'(${p}) = ${mF.tex()}$`]],
          working: [`$f(x) = ${a === 1 ? '' : a}x^{${n}} ${sgn(b)}x^{-1}$`, `$f'(x) = ${a * n}x^{${n - 1}} ${sgn(-b)}x^{-2}$`, `$f'(${p}) = ${mF.tex()}$`], hint: 'Rewrite $\\frac{b}{x}$ as $bx^{-1}$ before differentiating.',
          errors: [{ value: a * n * Math.pow(p, n - 1) + b / (p * p), tag: 'power-rule-negative', fb: '$\\frac{d}{dx}(x^{-1}) = -x^{-2}$: the power rule brings down $-1$.' }], verify: `diff(${a}*x**${n}+Rational(${b})/x,x).subs(x,${p})` },
        { command: 'Find', prompt: `the equation of the tangent to the curve at $x = ${p}$, in the form $y = mx + c$.`, marks: 3, answer: { kind: 'tuple', labels: ['m', 'c'], value: [mF.val(), c.val()], exact: true, markEach: true, display: `y = ${poly([[mF, 'x'], [c, '']])}` },
          ms: [['A1', `$f(${p}) = ${y0.tex()}$`], ['M1', `$y - ${paren(y0)} = ${mF.tex()}(x - ${paren(p)})$`], ['A1', `$y = ${poly([[mF, 'x'], [c, '']])}$`]],
          working: [`Point: $(${p},\\,${y0.tex()})$, gradient $${mF.tex()}$`, `$y - ${paren(y0)} = ${mF.tex()}(x - ${paren(p)})$`, `$y = ${poly([[mF, 'x'], [c, '']])}$`], hint: 'You need a point (use f) and a gradient (use f′).',
          errors: [], verify: `(diff(${a}*x**${n}+Rational(${b})/x,x).subs(x,${p}), (${a}*x**${n}+Rational(${b})/x).subs(x,${p}) - diff(${a}*x**${n}+Rational(${b})/x,x).subs(x,${p})*(${p}))` },
        { command: 'Write down', prompt: `the gradient of the normal at $x = ${p}$.`, marks: 1, answer: { kind: 'num', value: -1 / mF.val(), exact: true, display: fr(-1).div(mF).tex() }, ms: [['A1', `$${fr(-1).div(mF).tex()}$`]], working: ['Normal gradient $= -\\frac{1}{m}$'], hint: 'The normal is perpendicular to the tangent.',
          errors: [{ value: 1 / mF.val(), tag: 'reciprocal-no-sign', fb: 'Negative reciprocal: flip AND change sign.' }], verify: `-1/diff(${a}*x**${n}+Rational(${b})/x,x).subs(x,${p})` }
      ]
    };
  });

  reg('sl.stationary', { skill: 'SL-5.4', title: 'Stationary points and their nature', paper: 1 }, R => {
    let s1, s2; do { [s1, s2] = R.distinct(2, -4, 5); } while ((s1 + s2) % 2 !== 0); if (s1 > s2) [s1, s2] = [s2, s1];
    const b = -3 * (s1 + s2) / 2, c = 3 * s1 * s2, d = R.int(-5, 5);
    return {
      stem: `The curve $y = ${poly([[1, 'x^{3}'], [b, 'x^{2}'], [c, 'x'], [d, '']])}$ has two stationary points.`,
      parts: [
        { command: 'Find', prompt: 'the $x$-coordinates of the stationary points.', marks: 3, answer: { kind: 'list', value: [s1, s2], exact: true, markEach: true, display: `x = ${s1},\\ x = ${s2}` },
          ms: [['M1', `$\\frac{dy}{dx} = ${poly([[3, 'x^{2}'], [2 * b, 'x'], [c, '']])} = 0$`], ['A1', `$x = ${s1}$`], ['A1', `$x = ${s2}$`]], working: [`$\\frac{dy}{dx} = ${poly([[3, 'x^{2}'], [2 * b, 'x'], [c, '']])}$`, `$3(x ${sgn(-s1)})(x ${sgn(-s2)}) = 0$`],
          hint: 'Stationary points: $\\frac{dy}{dx} = 0$.', errors: [], verify: `solve(diff(x**3+(${b})*x**2+(${c})*x+(${d}),x),x)` },
        { command: 'Find', prompt: `the value of $\\frac{d^{2}y}{dx^{2}}$ at $x = ${s1}$.`, marks: 1, answer: { kind: 'num', value: 6 * s1 + 2 * b, exact: true, display: String(6 * s1 + 2 * b) }, ms: [['A1', `$${6 * s1 + 2 * b}$`]], working: [`$\\frac{d^{2}y}{dx^{2}} = 6x ${sgn(2 * b)}$`], hint: 'Differentiate $\\frac{dy}{dx}$ again.', verify: `diff(x**3+(${b})*x**2+(${c})*x+(${d}),x,2).subs(x,${s1})` },
        { command: 'Hence', dep: true, prompt: `state the nature of the stationary point at $x = ${s1}$.`, marks: 1, answer: Object.assign(mc(R, [{ tex: 'Local maximum', key: 'max' }, { tex: 'Local minimum', key: 'min' }, { tex: 'Point of inflection', key: 'inf' }], 'max'), { display: 'Local maximum' }),
          ms: [['R1', `$\\frac{d^{2}y}{dx^{2}} < 0$ so local maximum`]], working: ['Second derivative negative ⇒ concave down ⇒ local maximum.'], hint: 'Negative second derivative: concave down.', verify: `'max' if diff(x**3+(${b})*x**2+(${c})*x,x,2).subs(x,${s1})<0 else 'min'` }
      ]
    };
  });

  reg('sl.optim', { skill: 'SL-5.5', title: 'Optimisation: fencing against a wall', paper: 1 }, R => {
    const L = 4 * R.int(10, 50), x = L / 4, A = L * L / 8;
    return {
      stem: `A rectangular pen is built against a long straight wall. Fencing is used for the other three sides; the total length of fencing is $${L}$ m. The two sides perpendicular to the wall each have length $x$ m.`,
      parts: [
        { command: 'Show that', prompt: `the area of the pen is $A = ${L}x - 2x^{2}$.`, marks: 2, answer: { kind: 'open', display: 'See markscheme' }, ms: [['M1', `side parallel to wall $= ${L} - 2x$`], ['AG', `$A = x(${L} - 2x) = ${L}x - 2x^{2}$`]], working: [`Length along the wall $= ${L} - 2x$`, `$A = x(${L} - 2x) = ${L}x - 2x^{2}$`], hint: 'Two sides of length x use up 2x of the fencing.', verify: `expand(x*(${L}-2*x)-(${L}*x-2*x**2))==0` },
        { command: 'Find', dep: true, prompt: 'the value of $x$ that maximises the area.', marks: 3, answer: { kind: 'num', value: x, exact: true, display: String(x) }, ms: [['M1', `$\\frac{dA}{dx} = ${L} - 4x$`], ['M1', '$\\frac{dA}{dx} = 0$'], ['A1', `$x = ${x}$`]], working: [`$\\frac{dA}{dx} = ${L} - 4x = 0 \\Rightarrow x = ${x}$`], hint: 'Differentiate and set equal to zero.', verify: `solve(diff(${L}*x-2*x**2,x),x)[0]` },
        { command: 'Find', dep: true, prompt: 'the maximum area.', marks: 1, answer: { kind: 'num', value: A, exact: true, display: `${A}\\text{ m}^{2}` }, ms: [['A1', `$${A}$ m²`]], working: [`$A = ${L}(${x}) - 2(${x})^{2} = ${A}$`], hint: 'Substitute your x into A.', errors: [{ value: x, tag: 'x-not-area', fb: 'That is the value of x. Substitute it into A.' }], verify: `(${L}*x-2*x**2).subs(x,${x})` }
      ]
    };
  });

  /* ---------- 6–7 Statistics ---------- */
  reg('sl.stats', { skill: 'SL-6.3', title: 'Mean, median, standard deviation and outliers (NumWorks)', paper: 2 }, R => {
    const n = R.pick([8, 9, 10]), data = Array.from({ length: n }, () => R.int(10, 40)).sort((a, b) => a - b);
    const mean = data.reduce((s, v) => s + v, 0) / n, med = n % 2 ? data[(n - 1) / 2] : (data[n / 2 - 1] + data[n / 2]) / 2;
    const sd = Math.sqrt(data.reduce((s, v) => s + (v - mean) ** 2, 0) / n), Q1 = R.int(14, 20), Q3 = Q1 + R.int(6, 12), fence = Q3 + 1.5 * (Q3 - Q1);
    return {
      stem: `The number of minutes that ${n} students spent on homework one evening is recorded:\n$${data.join(',\\ ')}$`,
      parts: [
        { command: 'Find', prompt: 'the mean.', marks: 1, answer: { kind: 'num', value: mean, sf: 3, display: num(sf(mean, 3)) }, ms: [['A1', `$${num(sf(mean, 4))}$`]], working: [`$\\bar{x} = \\frac{${data.reduce((s, v) => s + v, 0)}}{${n}}$`], hint: 'NumWorks: Statistics app, enter the list, then Stats.', numworks: { app: 'Statistics', lines: [['Mean', num(sf(mean, 6))], ['Median', num(med)], ['Standard deviation σ', num(sf(sd, 6))]] }, verify: `Rational(${data.reduce((s, v) => s + v, 0)},${n})` },
        { command: 'Write down', prompt: 'the median.', marks: 1, answer: { kind: 'num', value: med, exact: true, display: num(med) }, ms: [['A1', `$${num(med)}$`]], working: [`Middle of the ordered list (position $\\frac{${n} + 1}{2}$)`], hint: 'The data is already in order.', verify: `median([${data.join(',')}])` },
        { command: 'Find', prompt: 'the standard deviation.', marks: 2, answer: { kind: 'num', value: sd, sf: 3, display: num(sf(sd, 3)) }, ms: [['(M1)', 'use of GDC'], ['A1', `$${num(sf(sd, 3))}$`]], working: [`NumWorks σ $= ${num(sf(sd, 4))}$`], hint: 'Use σ (population standard deviation), as in IB.', verify: `sqrt(sum((v-Rational(${data.reduce((s, v) => s + v, 0)},${n}))**2 for v in [${data.join(',')}])/${n})` },
        { command: 'Calculate', prompt: `For a different data set, $Q_1 = ${Q1}$ and $Q_3 = ${Q3}$. Calculate the smallest value that would be an outlier above $Q_3$.`, marks: 2, answer: { kind: 'num', value: fence, exact: true, display: num(fence) },
          ms: [['M1', `$${Q3} + 1.5(${Q3} - ${Q1})$`], ['A1', `$${num(fence)}$`]], working: [`IQR $= ${Q3 - Q1}$`, `Upper fence $= Q_3 + 1.5\\times\\text{IQR} = ${num(fence)}$`], hint: 'Outliers lie more than 1.5 × IQR beyond the quartiles.', errors: [{ value: 1.5 * (Q3 - Q1), tag: 'forgot-q3', fb: 'Add 1.5 × IQR on to Q3.' }], verify: `${Q3}+Rational(3,2)*(${Q3}-${Q1})` }
      ]
    };
  });

  function regressionGen(R, skill) {
    const n = 6, slope = R.pick([1.5, 2, 2.5, -1.5, 3]), icpt = R.int(5, 20);
    const xs = R.distinct(n, 1, 14).sort((a, b) => a - b), ys = xs.map(x => Math.round(slope * x + icpt + R.int(-3, 3)));
    const mx = xs.reduce((s, v) => s + v, 0) / n, my = ys.reduce((s, v) => s + v, 0) / n;
    const sxy = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0), sxx = xs.reduce((s, x) => s + (x - mx) ** 2, 0), syy = ys.reduce((s, y) => s + (y - my) ** 2, 0);
    const a = sxy / sxx, b = my - a * mx, r = sxy / Math.sqrt(sxx * syy), x0 = R.int(xs[1], xs[n - 2]), pred = a * x0 + b;
    return {
      stem: `A scientist records $${n}$ pairs of measurements.\n$x$: $${xs.join(',\\ ')}$\n$y$: $${ys.join(',\\ ')}$`,
      parts: [
        { command: 'Find', prompt: 'the Pearson product-moment correlation coefficient, $r$.', marks: 2, answer: { kind: 'num', value: r, sf: 3, display: num(sf(r, 3)) }, ms: [['(M1)', 'use of GDC'], ['A1', `$${num(sf(r, 3))}$`]], working: [`NumWorks Regression → Linear: $r = ${num(sf(r, 4))}$`], hint: 'NumWorks: Regression app, enter x and y, choose Linear.', numworks: { app: 'Regression', lines: [['a', num(sf(a, 6))], ['b', num(sf(b, 6))], ['r', num(sf(r, 6))]] }, verify: `(${sxy})/sqrt((${sxx})*(${syy}))` },
        { command: 'Write down', prompt: 'the equation of the regression line of $y$ on $x$, in the form $y = ax + b$.', marks: 2, answer: { kind: 'tuple', labels: ['a', 'b'], value: [a, b], sf: 3, markEach: true, display: `y = ${num(sf(a, 3))}x ${sgn(sf(b, 3))}` }, ms: [['A1', `$a = ${num(sf(a, 3))}$`], ['A1', `$b = ${num(sf(b, 3))}$`]], working: ['From the NumWorks regression output.'], hint: 'Give each value to 3 significant figures.', errors: [], verify: `((${sxy})/(${sxx}), Rational(${ys.reduce((s, v) => s + v, 0)},${n}) - (${sxy})/(${sxx})*Rational(${xs.reduce((s, v) => s + v, 0)},${n}))` },
        { command: 'Use', dep: true, prompt: `your regression line to estimate $y$ when $x = ${x0}$.`, marks: 2, answer: { kind: 'num', value: pred, sf: 3, display: num(sf(pred, 3)) }, ms: [['M1', `$${num(sf(a, 3))}(${x0}) ${sgn(sf(b, 3))}$`], ['A1', `$${num(sf(pred, 3))}$`]], working: [`$y = ${num(sf(a, 6))}(${x0}) ${sgn(sf(b, 6))} = ${num(sf(pred, 4))}$`], hint: 'Substitute x into the line (use stored values, not rounded ones).', verify: `(${sxy})/(${sxx})*${x0} + Rational(${ys.reduce((s, v) => s + v, 0)},${n}) - (${sxy})/(${sxx})*Rational(${xs.reduce((s, v) => s + v, 0)},${n})` },
        { command: 'Explain', prompt: `why it would not be reliable to use the line to estimate $y$ when $x = ${xs[n - 1] + 15}$.`, marks: 1, answer: Object.assign(mc(R, [{ tex: 'It is extrapolation: outside the range of the data', key: 'extrap' }, { tex: 'The correlation is negative', key: 'neg' }, { tex: 'There are too many data points', key: 'many' }, { tex: 'The line does not pass through the origin', key: 'origin' }], 'extrap'), { display: 'Extrapolation' }),
          ms: [['R1', `$x = ${xs[n - 1] + 15}$ is outside the data range (extrapolation)`]], working: [`The data run from $x = ${xs[0]}$ to $x = ${xs[n - 1]}$.`], hint: 'Compare the x-value with the data you were given.', verify: `'extrap' if ${xs[n - 1] + 15} > ${xs[n - 1]} else 'x'` }
      ]
    };
  }
  reg('sl.regression', { skill: 'SL-7.4', title: 'Correlation and regression (NumWorks)', paper: 2 }, R => regressionGen(R, 'SL-7.4'));
  Hub.qcore.regressionGen = regressionGen;
})(window.Hub = window.Hub || {});

/* AA HL — original parameterised questions (Units 1–5, Year 1). Higher rigour than SL: multi-step,
   parameters, AHL content (partial fractions, extended binomial, proof by induction, complex numbers,
   implicit differentiation). Oxford HL 2019 / Mr Le section numbers are used for mapping only. */
(function (Hub) {
  'use strict';
  const { F, fr, T, num, round, sf, poly, lin, sgn, paren, comb, factorial, mc, reg, regressionGen } = Hub.qcore;

  /* ---------- 1.1 Sigma: mixed arithmetic and geometric ---------- */
  reg('hl.sigma', { skill: 'HL-1.1', title: 'Sigma notation: splitting sums and writing series', paper: 1, challenge: true }, (R, o) => {
    const a = R.int(2, 5), c = R.pick([2, 3]), nn = o.challenge ? R.int(9, 12) : R.int(6, 9);
    const ar = a * nn * (nn + 1) / 2, ge = c * (Math.pow(c, nn) - 1) / (c - 1), S = ar + ge;
    const f = R.int(2, 9), d = R.int(3, 7), N = R.int(12, 25), last = f + (N - 1) * d;
    const opts = [
      { tex: `$\\sum_{r=1}^{${N}} (${lin(d, f - d, 'r')})$`, key: 'ok' },
      { tex: `$\\sum_{r=1}^{${N - 1}} (${lin(d, f - d, 'r')})$`, key: 'short' },
      { tex: `$\\sum_{r=0}^{${N}} (${lin(d, f, 'r')})$`, key: 'extra' },
      { tex: `$\\sum_{r=1}^{${N}} (${lin(d, f, 'r')})$`, key: 'shift' }];
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `the exact value of $\\sum_{r=1}^{${nn}} \\left(${a}r + ${c}^{r}\\right)$.`, marks: 4, answer: { kind: 'num', value: S, exact: true, display: String(S) },
          ms: [['M1', `splitting into $${a}\\sum r + \\sum ${c}^{r}$`], ['A1', `$${a}\\times\\frac{${nn}(${nn + 1})}{2} = ${ar}$`], ['A1', `$\\frac{${c}(${c}^{${nn}} - 1)}{${c} - 1} = ${ge}$`], ['A1', `$${S}$`]],
          working: [`$\\sum_{r=1}^{${nn}} ${a}r = ${a}\\cdot\\frac{${nn}\\cdot ${nn + 1}}{2} = ${ar}$ (arithmetic)`, `$\\sum_{r=1}^{${nn}} ${c}^{r} = \\frac{${c}\\left(${c}^{${nn}} - 1\\right)}{${c} - 1} = ${ge}$ (geometric, $u_1 = ${c}$)`, `Total $= ${S}$`],
          hint: 'Split into an arithmetic part and a geometric part. What is the first term of the geometric part when r = 1?',
          errors: [{ value: S + 1, tag: 'geometric-from-r-0', fb: `The geometric part starts at ${c}¹ = ${c}, not ${c}⁰ = 1.` }, { value: ar + Math.pow(c, nn), tag: 'last-term-only', fb: 'Σ cʳ is a sum of terms: use the geometric series formula.' }],
          verify: `summation(${a}*r+${c}**r,(r,1,${nn}))` },
        { command: 'Write down', prompt: `which expression is equal to $${f} + ${f + d} + ${f + 2 * d} + \\cdots + ${last}$.`, marks: 2, answer: Object.assign(mc(R, opts, 'ok'), { display: opts[0].tex.replace(/\$/g, '') }),
          ms: [['M1', `$u_r = ${lin(d, f - d, 'r')}$`], ['A1', `upper limit $${N}$`]], working: [`$u_r = ${f} + (r - 1)${d} = ${lin(d, f - d, 'r')}$`, `$${lin(d, f - d, 'r')} = ${last} \\Rightarrow r = ${N}$`],
          hint: 'Find the general term first; then work out which r gives the last term.', verify: `'ok' if summation(${d}*r+(${f - d}),(r,1,${N}))==sum(range(${f},${last}+1,${d})) else 'x'` }
      ]
    };
  });

  /* ---------- 1.2 Arithmetic/geometric: simultaneous conditions ---------- */
  reg('hl.arithgeo', { skill: 'HL-1.2a', title: 'Sequences from simultaneous conditions', paper: 1 }, R => {
    const u1 = R.int(-8, 12), d = R.nz(-4, 6), m = R.int(3, 8); let nn; do nn = R.int(10, 16); while (nn === 2 * m - 1); // S(2m−1) = (2m−1)·u(m) would make the equations dependent
    const A = u1 + (m - 1) * d, B = nn * (2 * u1 + (nn - 1) * d) / 2;
    const q = R.pick([3, 4, 5]), p = R.int(1, q - 1), kk = R.int(1, 3), S = q * q * kk, U = kk * p * (q - p), r1 = fr(p, q), r2 = fr(q - p, q);
    const roots = r1.eq(r2) ? [r1.val()] : [r1.val(), r2.val()];
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `An arithmetic sequence has $u_{${m}} = ${A}$ and $S_{${nn}} = ${B}$. Find $u_1$ and $d$.`, marks: 5, answer: { kind: 'tuple', labels: ['u_1', 'd'], value: [u1, d], exact: true, markEach: true, display: `u_1 = ${u1},\\ d = ${d}` },
          ms: [['M1', `$u_1 + ${m - 1}d = ${A}$`], ['M1', `$\\frac{${nn}}{2}\\left(2u_1 + ${nn - 1}d\\right) = ${B}$`], ['M1', 'attempt to solve simultaneously'], ['A1', `$u_1 = ${u1}$`], ['A1', `$d = ${d}$`]],
          working: [`$u_1 + ${m - 1}d = ${A}$ … (1)`, `$${nn}u_1 + ${nn * (nn - 1) / 2}d = ${B}$ … (2)`, `Solving: $u_1 = ${u1}$, $d = ${d}$`], hint: 'Write one equation from uₘ and one from Sₙ, then solve them simultaneously.',
          errors: [{ value: [d, u1], tag: 'swapped', fb: 'Check which value is u₁ and which is d.' }], verify: `tuple(solve([Eq(x+${m - 1}*y,${A}),Eq(Rational(${nn},2)*(2*x+${nn - 1}*y),${B})],[x,y]).values())` },
        { command: 'Find', prompt: `A geometric sequence has second term $${U}$ and sum to infinity $${S}$. Find the possible values of the common ratio.`, marks: 5, answer: { kind: 'list', value: roots, exact: true, markEach: true, boxes: 2, display: roots.length > 1 ? `r = ${r1.tex()}\\text{ or }r = ${r2.tex()}` : `r = ${r1.tex()}` },
          ms: [['M1', `$u_1 r = ${U}$ and $\\frac{u_1}{1 - r} = ${S}$`], ['M1', `$${S}r(1 - r) = ${U}$`], ['A1', `$${S}r^{2} - ${S}r + ${U} = 0$`], ['A1A1', `$r = ${r1.tex()}$, $r = ${r2.tex()}$ (both satisfy $|r| < 1$)`]],
          working: [`$u_1 = \\frac{${U}}{r}$ and $u_1 = ${S}(1 - r)$`, `$${S}r(1 - r) = ${U} \\Rightarrow ${S}r^{2} - ${S}r + ${U} = 0$`, `$r = ${r1.tex()}$ or $r = ${r2.tex()}$; both have $|r| < 1$, so both are valid`],
          hint: 'Eliminate u₁. Then check each root satisfies |r| < 1.', verify: `solve(${S}*k**2-${S}*k+${U},k)` }
      ]
    };
  });

  /* ---------- 1.2 Convergence ---------- */
  reg('hl.convergence', { skill: 'HL-1.2b', title: 'Convergence of a geometric series with a variable ratio', paper: 1 }, R => {
    const p = R.int(2, 5), q = R.nz(-6, 6), s = R.pick([3, 4, 5, 7]);
    const lo = fr(q - s, p), hi = fr(q + s, p);
    let x0; do { x0 = R.int(Math.ceil(lo.val()), Math.floor(hi.val())); } while (!(x0 > lo.val() && x0 < hi.val()) || p * x0 - q === s);
    const rr = fr(p * x0 - q, s), Sinf = fr(1).div(fr(1).sub(rr));
    return {
      stem: `Consider the geometric series $1 + \\left(\\frac{${lin(p, -q)}}{${s}}\\right) + \\left(\\frac{${lin(p, -q)}}{${s}}\\right)^{2} + \\cdots$`,
      parts: [
        { command: 'Find', prompt: 'the set of values of $x$ for which the series has a sum to infinity. Give the end-points $a < x < b$.', marks: 4, answer: { kind: 'tuple', labels: ['a', 'b'], value: [lo.val(), hi.val()], exact: true, markEach: true, display: `${lo.tex()} < x < ${hi.tex()}` },
          ms: [['M1', `$\\left|\\frac{${lin(p, -q)}}{${s}}\\right| < 1$`], ['A1', `$-${s} < ${lin(p, -q)} < ${s}$`], ['A1A1', `$${lo.tex()} < x < ${hi.tex()}$`]],
          working: [`Need $|r| < 1$: $-1 < \\frac{${lin(p, -q)}}{${s}} < 1$`, `$${-s} < ${lin(p, -q)} < ${s}$`, `$${lo.tex()} < x < ${hi.tex()}$`], hint: 'A geometric series converges when |r| < 1. Solve the double inequality.',
          errors: [{ value: [-hi.val(), -lo.val()], tag: 'sign', fb: 'Add the constant to all three parts of the inequality before dividing.' }], verify: `tuple(sorted(solve((${p}*x-(${q}))**2-${s * s},x)))` },
        { command: 'Find', prompt: `the exact sum to infinity when $x = ${x0}$.`, marks: 2, answer: { kind: 'num', value: Sinf.val(), exact: true, display: Sinf.tex() },
          ms: [['M1', `$r = ${rr.tex()}$`], ['A1', `$S_\\infty = ${Sinf.tex()}$`]], working: [`$r = \\frac{${p}(${x0}) ${sgn(-q)}}{${s}} = ${rr.tex()}$`, `$S_\\infty = \\frac{1}{1 - ${paren(rr)}} = ${Sinf.tex()}$`],
          hint: 'Work out $r$, then use $S_\\infty = \\frac{u_1}{1 - r}$.', errors: [{ value: fr(1).div(fr(1).add(rr)).val(), tag: 'sinf-sign', fb: '$S_\\infty = \\frac{u_1}{1 - r}$.' }], verify: `1/(1-Rational(${p * x0 - q},${s}))` }
      ]
    };
  });

  /* ---------- 1.2 Financial comparison ---------- */
  reg('hl.finance', { skill: 'HL-1.2c', title: 'Comparing simple and compound growth (NumWorks)', paper: 2 }, R => {
    const P = R.pick([2000, 5000, 8000, 10000]), i = R.pick([6, 7, 8]), j = R.pick([4.5, 5, 5.5]);
    const A = tt => P * (1 + i * tt / 100), B = tt => P * Math.pow(1 + j / 1200, 12 * tt);
    let y = 1; while (B(y) <= A(y)) y++;
    const B10 = round(B(10), 2);
    return {
      stem: `Two investment plans each start with $\\$${P}$. Plan A pays simple interest of $${i}\\%$ of the original amount each year. Plan B pays $${j}\\%$ per year compounded monthly.`,
      parts: [
        { command: 'Find', prompt: 'the value of Plan B after 10 years, correct to two decimal places.', marks: 2, answer: { kind: 'num', value: B10, dp: 2, display: `\\$${B10.toFixed(2)}` },
          ms: [['M1', `$${P}\\left(1 + \\frac{${j}}{1200}\\right)^{120}$`], ['A1', `$\\$${B10.toFixed(2)}$`]], working: [`$${P}\\left(1 + \\frac{${j}}{1200}\\right)^{120} = ${B10.toFixed(2)}$`], hint: '12 compounding periods each year for 10 years.',
          numworks: { app: 'Calculation', lines: [[`${P}×(1+${j}/1200)^120`, B10.toFixed(2)]] }, errors: [{ value: round(P * Math.pow(1 + j / 100, 10), 2), tag: 'annual-not-compounded', fb: 'Monthly compounding: divide the rate by 12 and use 120 periods.' }],
          verify: `${P}*(1+Rational(${Math.round(j * 10)},12000))**120` },
        { command: 'Find', prompt: 'the least number of complete years after which Plan B is worth more than Plan A.', marks: 4, answer: { kind: 'num', value: y, int: true, display: String(y) },
          ms: [['A1', `$A = ${P}(1 + ${i / 100}n)$`], ['A1', `$B = ${P}\\left(1 + \\frac{${j}}{1200}\\right)^{12n}$`], ['M1', 'comparing with a graph or table on the GDC'], ['A1', `$n = ${y}$`]],
          working: [`Solve $${P}\\left(1 + \\frac{${j}}{1200}\\right)^{12n} > ${P}(1 + ${i / 100}n)$`, `NumWorks table: year $${y - 1}$: A $= ${round(A(y - 1), 2).toFixed(2)}$, B $= ${round(B(y - 1), 2).toFixed(2)}$`, `year $${y}$: A $= ${round(A(y), 2).toFixed(2)}$, B $= ${round(B(y), 2).toFixed(2)}$ ✓`],
          hint: 'Model each plan as a function of n, then use a NumWorks table to compare whole years.', errors: [{ value: y - 1, tag: 'round-down', fb: 'Check the year before: B has not yet overtaken A.' }],
          verify: `next(m for m in range(1,200) if ${P}*(1+Rational(${Math.round(j * 10)},12000))**(12*m) > ${P}*(1+Rational(${i},100)*m))` }
      ]
    };
  });

  /* ---------- 1.3 Proof: counterexample, contradiction, direct ---------- */
  reg('hl.proof', { skill: 'HL-1.3a', title: 'Proof: counterexample, contradiction and direct proof', paper: 1 }, R => {
    const p = R.pick([5, 11, 17]); let first = 1; const isP = v => { if (v < 2) return false; for (let d = 2; d * d <= v; d++) if (v % d === 0) return false; return true; };
    while (isP(first * first + first + p)) first++;
    const primeNs = []; for (let m = 1; m < first; m++) primeNs.push(m);
    const wrong = R.shuffle(primeNs).slice(0, 3);
    const opts = [{ tex: `$n = ${first}$`, key: 'n' + first }].concat(wrong.map(w => ({ tex: `$n = ${w}$`, key: 'n' + w })));
    const kq = R.pick([2, 3, 5, 7]);
    const cmc = mc(R, [{ tex: `Assume $\\sqrt{${kq}} = \\frac{a}{b}$ where $a, b\\in\\mathbb{Z}$, $b \\ne 0$, and $\\frac{a}{b}$ is in lowest terms`, key: 'lowest' },
      { tex: `Assume $\\sqrt{${kq}}$ is irrational`, key: 'irr' }, { tex: `Assume $\\sqrt{${kq}} = \\frac{a}{b}$ for some integers $a$ and $b$`, key: 'nolowest' }, { tex: `Assume $${kq} = a^{2}$ for some integer $a$`, key: 'square' }], 'lowest');
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `which value of $n$ is a counterexample to the statement “$n^{2} + n + ${p}$ is prime for every positive integer $n$”.`, marks: 2, answer: Object.assign(mc(R, opts, 'n' + first), { display: `n = ${first}` }),
          ms: [['A1', `$n = ${first}$`], ['R1', `$${first * first + first + p}$ is not prime`]], working: [`$${first}^{2} + ${first} + ${p} = ${first * first + first + p} = ${(() => { const v = first * first + first + p; for (let d = 2; d * d <= v; d++) if (v % d === 0) return d + '\\times' + v / d; return v; })()}$, which is not prime.`],
          hint: 'Substitute each option. A single failure disproves a “for every” statement.', verify: `'n${first}' if not isprime(${first}**2+${first}+${p}) and all(isprime(m**2+m+${p}) for m in [${wrong.join(',')}]) else 'x'` },
        { command: 'State', prompt: `the assumption that begins a proof by contradiction that $\\sqrt{${kq}}$ is irrational.`, marks: 1, answer: Object.assign(cmc, { display: 'lowest terms' }), ms: [['A1', 'rational, in lowest terms (needed for the contradiction)']],
          working: ['Assume the opposite of what you want to prove, with $\\frac{a}{b}$ in lowest terms: the contradiction is that $a$ and $b$ then share a factor.'], hint: 'Assume the opposite — and set it up so a contradiction is possible.', verify: `'lowest'` },
        { command: 'Prove', prompt: 'that the product of any two odd integers is odd.', marks: 4, answer: { kind: 'open', display: 'See markscheme' },
          ms: [['M1', 'writing odd integers as $2m + 1$ and $2n + 1$ (different letters)'], ['A1', '$(2m + 1)(2n + 1) = 4mn + 2m + 2n + 1$'], ['A1', '$= 2(2mn + m + n) + 1$'], ['R1', '$2mn + m + n \\in \\mathbb{Z}$, so the product is odd']],
          working: ['Let the integers be $2m + 1$ and $2n + 1$, $m, n \\in \\mathbb{Z}$', '$(2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$', 'which is one more than a multiple of 2, so it is odd.'],
          hint: 'Use DIFFERENT letters for the two odd numbers.', verify: `expand((2*x+1)*(2*y+1) - (2*(2*x*y+x+y)+1))==0` }
      ]
    };
  });

  /* ---------- 1.3 Proof by induction ---------- */
  const IND = [
    { lhs: 'r(r+1)', rhs: '\\frac{n(n+1)(n+2)}{3}', term: k => `(${k}+1)(${k}+2)`, wrong: [k => `${k}(${k}+1)`, k => `(${k}+1)^{2}`, k => `(${k}+2)(${k}+3)`], f: m => m * (m + 1) * (m + 2) / 3, u: m => m * (m + 1), py: ['r*(r+1)', 'n*(n+1)*(n+2)/3'] },
    { lhs: '\\frac{1}{r(r+1)}', rhs: '\\frac{n}{n+1}', term: k => `\\frac{1}{(${k}+1)(${k}+2)}`, wrong: [k => `\\frac{1}{${k}(${k}+1)}`, k => `\\frac{1}{${k}+1}`, k => `\\frac{1}{(${k}+2)(${k}+3)}`], f: m => m / (m + 1), u: m => 1 / (m * (m + 1)), py: ['1/(r*(r+1))', 'n/(n+1)'], frac: true },
    { lhs: 'r^{3}', rhs: '\\frac{n^{2}(n+1)^{2}}{4}', term: k => `(${k}+1)^{3}`, wrong: [k => `${k}^{3}`, k => `(${k}+1)^{2}`, k => `${k}^{3}+1`], f: m => m * m * (m + 1) * (m + 1) / 4, u: m => m ** 3, py: ['r**3', 'n**2*(n+1)**2/4'] },
    { lhs: 'r\\cdot 2^{r}', rhs: '(n-1)2^{n+1} + 2', term: k => `(${k}+1)2^{${k}+1}`, wrong: [k => `${k}\\cdot 2^{${k}}`, k => `(${k}+1)2^{${k}}`, k => `${k}\\cdot 2^{${k}+1}`], f: m => (m - 1) * Math.pow(2, m + 1) + 2, u: m => m * Math.pow(2, m), py: ['r*2**r', '(n-1)*2**(n+1)+2'] }
  ];
  reg('hl.induction', { skill: 'HL-1.3b', title: 'Proof by induction: series', paper: 1 }, R => {
    const P = R.pick(IND), m = R.int(5, 8);
    const opts = [{ tex: `$${P.term('k')}$`, key: 'ok' }].concat(P.wrong.map((w, i) => ({ tex: `$${w('k')}$`, key: 'w' + i })));
    const fm = P.frac ? fr(m, m + 1) : null;
    return {
      stem: `Let $P(n)$ be the statement $\\sum_{r=1}^{n} ${P.lhs} = ${P.rhs}$, $n\\in\\mathbb{Z}^{+}$.`,
      parts: [
        { command: 'Verify', prompt: `that $P(${m})$ is true by finding the value of the left-hand side when $n = ${m}$.`, marks: 1, answer: { kind: 'num', value: P.f(m), exact: true, display: fm ? fm.tex() : String(P.f(m)) }, ms: [['A1', `$${fm ? fm.tex() : P.f(m)}$ = RHS`]],
          working: [`Add the first $${m}$ terms directly; the RHS also gives $${fm ? fm.tex() : P.f(m)}$.`], hint: 'Add the terms for r = 1, 2, …, ' + m + '.', verify: `summation(${P.py[0]},(r,1,${m}))` },
        { command: 'Write down', prompt: 'the term that is added to $\\sum_{r=1}^{k}$ to obtain $\\sum_{r=1}^{k+1}$ in the inductive step.', marks: 1, answer: Object.assign(mc(R, opts, 'ok'), { display: P.term('k') }), ms: [['A1', `$${P.term('k')}$`]],
          working: [`Replace $r$ with $k + 1$ in $${P.lhs}$.`], hint: 'The next term is the (k + 1)th term: substitute r = k + 1.', verify: `'ok' if simplify((${P.py[0]}).subs(r,k+1) - ((${P.py[1]}).subs(n,k+1)-(${P.py[1]}).subs(n,k)))==0 else 'x'` },
        { command: 'Prove', prompt: '$P(n)$ by mathematical induction.', marks: 7, answer: { kind: 'open', display: 'See markscheme' },
          ms: [['A1', '$P(1)$ shown true: LHS = RHS'], ['M1', 'assume $P(k)$ true for some $k\\in\\mathbb{Z}^{+}$'], ['M1', `$\\sum_{r=1}^{k+1} = ${P.rhs.replace(/n/g, 'k')} + ${P.term('k')}$`], ['A1', 'correct common factor or common denominator'], ['A1', 'correct algebra'], ['A1', `reaching $${P.rhs.replace(/n/g, '(k+1)')}$`], ['R1', '$P(1)$ true and $P(k) \\Rightarrow P(k+1)$, so $P(n)$ true for all $n\\in\\mathbb{Z}^{+}$ (only if the first four marks are earned)']],
          working: ['Basis, assumption, inductive step, conclusion — see markscheme.'], hint: 'Four parts: base case, assumption, inductive step, conclusion sentence.', verify: `simplify(summation(${P.py[0]},(r,1,n)) - (${P.py[1]}))==0` }
      ]
    };
  });

  /* ---------- 1.4 Counting principles ---------- */
  const WORDS = [['BANANA', [3, 2]], ['LETTER', [2, 2]], ['ALGEBRA', [2]], ['CALCULUS', [2, 2, 2]], ['INDUCTION', [2, 2]], ['SEQUENCE', [3]], ['PARALLEL', [2, 3]]];
  reg('hl.counting', { skill: 'HL-1.4a', title: 'Permutations and combinations with restrictions', paper: 1 }, R => {
    const [w, reps] = R.pick(WORDS), arr = factorial(w.length) / reps.reduce((s, v) => s * factorial(v), 1);
    const hl = R.int(6, 9), sl = R.int(5, 8), size = 5, k = R.int(2, 3), com = comb(hl, k) * comb(sl, size - k);
    const np = R.int(5, 8), row = 2 * factorial(np - 1);
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `the number of different arrangements of the letters of the word ${w}.`, marks: 2, answer: { kind: 'num', value: arr, int: true, display: String(arr) },
          ms: [['M1', `$\\frac{${w.length}!}{${reps.map(v => v + '!').join('\\,')}}$`], ['A1', `$${arr}$`]], working: [`$${w.length}$ letters with repeats: $\\frac{${w.length}!}{${reps.map(v => v + '!').join('\\,')}} = ${arr}$`],
          hint: 'Divide by the factorial of each repeated letter count.', errors: [{ value: factorial(w.length), tag: 'repeats-not-divided', fb: 'Swapping identical letters gives the same word: divide by the repeats.' }], verify: `factorial(len('${w}'))/prod([factorial('${w}'.count(ch)) for ch in set('${w}')])` },
        { command: 'Find', prompt: `A committee of ${size} is chosen from ${hl} HL students and ${sl} SL students. Find the number of committees with exactly ${k} HL students.`, marks: 2, answer: { kind: 'num', value: com, int: true, display: String(com) },
          ms: [['M1', `$\\binom{${hl}}{${k}}\\binom{${sl}}{${size - k}}$`], ['A1', `$${com}$`]], working: [`$\\binom{${hl}}{${k}} \\times \\binom{${sl}}{${size - k}} = ${comb(hl, k)}\\times ${comb(sl, size - k)} = ${com}$`],
          hint: 'Choose the HL members and the SL members separately, then multiply.', errors: [{ value: comb(hl + sl, size), tag: 'ignored-restriction', fb: `That counts every committee of ${size}. Use exactly ${k} HL students.` }, { value: comb(hl, k) + comb(sl, size - k), tag: 'added-not-multiplied', fb: 'Each HL choice can go with each SL choice: multiply.' }],
          verify: `binomial(${hl},${k})*binomial(${sl},${size - k})` },
        { command: 'Find', prompt: `the number of ways ${np} people can sit in a row if two particular people must sit next to each other.`, marks: 2, answer: { kind: 'num', value: row, int: true, display: String(row) },
          ms: [['M1', `$${np - 1}!$ treating the pair as one unit`], ['A1', `$2\\times ${np - 1}! = ${row}$`]], working: [`Glue the pair together: $${np - 1}$ units, $${np - 1}!$ ways`, `The pair can swap: $\\times 2$, total $${row}$`],
          hint: 'Treat the pair as one block — and remember the pair can be in either order.', errors: [{ value: factorial(np - 1), tag: 'forgot-internal-arrangement', fb: 'The two people can swap places within their block: × 2.' }, { value: factorial(np), tag: 'ignored-restriction', fb: 'That counts every arrangement.' }], verify: `2*factorial(${np - 1})` }
      ]
    };
  });

  /* ---------- 1.4 Binomial theorem incl. extension ---------- */
  reg('hl.binomial', { skill: 'HL-1.4b', title: 'Binomial theorem: general term and fractional/negative powers', paper: 1, challenge: true }, (R, o) => {
    const nn = R.pick([6, 9]), a = nn === 9 ? R.pick([1, 2]) : R.pick([1, 2, 3]), b = nn === 9 ? R.pick([1, 2]) : R.pick([1, 2, 3]), rr = 2 * nn / 3;
    const ct = comb(nn, rr) * Math.pow(a, nn - rr) * Math.pow(-b, rr);
    // extension: (A + Bx)^m, A in {1,4,9} for m=±1/2; A in {1,2,3} for m = -1, -2
    const m = o.challenge ? R.pick([fr(1, 2), fr(-1, 2), fr(-3, 2)]) : R.pick([fr(-1), fr(-2), fr(1, 2), fr(-1, 2)]);
    const A = m.d === 2 ? R.pick([1, 4, 9]) : R.pick([1, 2, 3]), B = R.pick([-3, -2, -1, 1, 2, 3]);
    const sq = Math.round(Math.sqrt(A));
    const Apow = m.d === 2 ? fr(sq).pow(m.n) : fr(A).pow(m.n); // A^m
    const c2 = Apow.mul(m).mul(m.sub(1)).div(2).mul(fr(B, A).pow(2));
    const valid = fr(A, Math.abs(B));
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `the constant term in the expansion of $\\left(${a === 1 ? '' : a}x^{2} - \\frac{${b}}{x}\\right)^{${nn}}$.`, marks: 4, answer: { kind: 'num', value: ct, exact: true, display: String(ct) },
          ms: [['M1', `general term $\\binom{${nn}}{r}(${a === 1 ? '' : a}x^{2})^{${nn}-r}\\left(-\\frac{${b}}{x}\\right)^{r}$`], ['M1', `$2(${nn} - r) - r = 0$`], ['A1', `$r = ${rr}$`], ['A1', `$${ct}$`]],
          working: [`Power of $x$: $2(${nn} - r) - r = ${2 * nn} - 3r$`, `$${2 * nn} - 3r = 0 \\Rightarrow r = ${rr}$`, `$\\binom{${nn}}{${rr}}(${a})^{${nn - rr}}(-${b})^{${rr}} = ${ct}$`],
          hint: 'Collect powers of x in the general term. Keep the minus sign with the second term.',
          errors: [{ value: Math.abs(ct), tag: 'sign-of-negative-term', fb: `The second term is negative; (−${b})^${rr} keeps track of the sign.` }, { value: comb(nn, rr) * Math.pow(a, rr) * Math.pow(-b, nn - rr), tag: 'powers-swapped', fb: 'Match each power to the right term in the general term.' }],
          verify: `expand((${a}*x**2-Rational(${b})/x)**${nn}).as_coefficients_dict()[1]` },
        { command: 'Find', prompt: `the coefficient of $x^{2}$ in the expansion of $(${A} ${B < 0 ? '-' : '+'} ${Math.abs(B) === 1 ? '' : Math.abs(B)}x)^{${m.tex()}}$.`, marks: 4, answer: { kind: 'num', value: c2.val(), exact: true, display: c2.tex() },
          ms: [['M1', A === 1 ? 'use of the extended binomial expansion' : `$${A}^{${m.tex()}}\\left(1 ${B < 0 ? '-' : '+'} \\frac{${Math.abs(B)}}{${A}}x\\right)^{${m.tex()}}$`], ['M1', `$\\frac{(${m.tex()})(${m.sub(1).tex()})}{2!}\\left(${fr(B, A).tex()}x\\right)^{2}$`], ['A1', 'correct values'], ['A1', `$${c2.tex()}$`]],
          working: [A === 1 ? `$(1 + y)^{n} = 1 + ny + \\frac{n(n-1)}{2!}y^{2} + \\cdots$ with $y = ${B}x$` : `Factor out $${A}^{${m.tex()}} = ${Apow.tex()}$: $${Apow.tex()}\\left(1 + ${fr(B, A).tex()}x\\right)^{${m.tex()}}$`,
            `$x^{2}$ term: $${Apow.isInt() && Apow.n === 1 ? '' : Apow.tex() + '\\times'}\\frac{(${m.tex()})(${m.sub(1).tex()})}{2}\\left(${fr(B, A).tex()}\\right)^{2} = ${c2.tex()}$`],
          hint: 'Get the bracket into the form (1 + something)ⁿ first.', errors: [{ value: m.mul(m.sub(1)).div(2).mul(fr(B).pow(2)).val(), tag: 'did-not-factor', fb: `The formula needs (1 + y)ⁿ: factor out ${A} first.` }, { value: c2.neg().val(), tag: 'sign', fb: 'Check signs: n(n − 1) with n negative.' }],
          verify: `series((${A}+(${B})*x)**(${m.py()}),x,0,3).removeO().coeff(x,2)` },
        { command: 'Write down', dep: true, prompt: 'the values of $x$ for which this expansion is valid. Give $c$ where the condition is $|x| < c$.', marks: 1, answer: { kind: 'num', value: valid.val(), exact: true, display: `|x| < ${valid.tex()}` }, ms: [['A1', `$|x| < ${valid.tex()}$`]],
          working: [`Need $\\left|${fr(B, A).tex()}x\\right| < 1 \\Rightarrow |x| < ${valid.tex()}$`], hint: 'The expansion of (1 + y)ⁿ is valid for |y| < 1.', errors: [{ value: Math.abs(B) / A, tag: 'inverted-validity', fb: '$\\left|\\frac{B}{A}x\\right| < 1$ gives $|x| < \\frac{A}{|B|}$.' }], verify: `Rational(${A},${Math.abs(B)})` }
      ]
    };
  });

  /* ---------- 2.1 Functional relationships ---------- */
  reg('hl.funcrel', { skill: 'HL-2.1', title: 'Domain and range of composite-type expressions', paper: 1 }, R => {
    const a = R.int(2, 9), b = R.int(-a + 1, 6), c = R.int(-5, 9), h = R.int(-3, 3);
    let p, q; do { p = R.int(-6, 2); q = R.int(1, 7); } while (!(p < h && h < q) || (h - p) === (q - h));
    const ext = Math.max((p - h) ** 2, (q - h) ** 2), mn = c - ext, ends = [c - (p - h) ** 2, c - (q - h) ** 2];
    const bb = b === 0 ? 1 : b;
    return {
      stem: `Let $f(x) = \\sqrt{${a} - x} + \\frac{1}{x ${sgn(bb)}}$ and $g(x) = ${c} - (x ${sgn(-h)})^{2}$, $${p} \\le x \\le ${q}$.`,
      parts: [
        { command: 'Write down', prompt: 'the largest value of $x$ in the domain of $f$.', marks: 1, answer: { kind: 'num', value: a, exact: true, display: String(a) }, ms: [['A1', `$x \\le ${a}$`]], working: [`$${a} - x \\ge 0 \\Rightarrow x \\le ${a}$`], hint: 'Square roots need a non-negative input.', verify: `${a}` },
        { command: 'Write down', prompt: 'the value of $x$ that must also be excluded from the domain of $f$.', marks: 1, answer: { kind: 'num', value: -bb, exact: true, display: String(-bb) }, ms: [['A1', `$x \\ne ${-bb}$`]], working: [`Denominator zero at $x = ${-bb}$`], hint: 'Where is the denominator zero?', verify: `solve(x+(${bb}),x)[0]` },
        { command: 'Find', prompt: 'the range of $g$. Give the least and greatest values.', marks: 3, answer: { kind: 'tuple', labels: ['\\text{least}', '\\text{greatest}'], value: [mn, c], exact: true, markEach: true, display: `${mn} \\le g(x) \\le ${c}` },
          ms: [['M1', `vertex $(${h},\\,${c})$ lies in the domain`], ['A1', `greatest $= ${c}$`], ['A1', `least $= ${mn}$ at $x = ${(p - h) ** 2 > (q - h) ** 2 ? p : q}$`]],
          working: [`Maximum at the vertex $x = ${h}$: $g = ${c}$`, `Check both ends: $g(${p}) = ${ends[0]}$, $g(${q}) = ${ends[1]}$`, `Range: $${mn} \\le g(x) \\le ${c}$`], hint: 'Is the vertex inside the domain? Check BOTH end-points too.',
          errors: [{ value: [Math.min(...ends), Math.max(...ends)], tag: 'endpoints-only', fb: 'The turning point is inside the domain, so the greatest value is at the vertex, not an end-point.' }],
          verify: `(minimum(${c}-(x-(${h}))**2,x,Interval(${p},${q})), maximum(${c}-(x-(${h}))**2,x,Interval(${p},${q})))` }
      ]
    };
  });

  /* ---------- 2.2 Special functions: rational, radical, tangent condition ---------- */
  reg('hl.special', { skill: 'HL-2.2a', title: 'Quadratic, rational and radical functions', paper: 1 }, R => {
    let a, b, c, d; do { a = R.nz(-5, 6); b = R.nz(-8, 8); c = R.pick([1, 2, 3, -2]); d = R.nz(-6, 6); } while (a * d === b * c);
    const k = R.int(2, 7), p = R.nz(-6, 6), m = R.nz(-5, 5), q = R.int(-6, 9);
    let pp = p; if ((pp - m) % 2) pp += 1; const cTan = q - (pp - m) * (pp - m) / 4;
    return {
      stem: '',
      parts: [
        { command: 'Write down', prompt: `the equations of the asymptotes of $y = \\frac{${lin(a, b)}}{${lin(c, d)}}$. Give $x = h$ and $y = v$.`, marks: 2, answer: { kind: 'tuple', labels: ['h', 'v'], value: [-d / c, a / c], exact: true, markEach: true, display: `x = ${fr(-d, c).tex()},\\ y = ${fr(a, c).tex()}` },
          ms: [['A1', `$x = ${fr(-d, c).tex()}$`], ['A1', `$y = ${fr(a, c).tex()}$`]], working: [`Vertical: $${lin(c, d)} = 0$`, `Horizontal: ratio of leading coefficients $\\frac{${a}}{${c}}$`], hint: 'Vertical: denominator zero. Horizontal: behaviour as |x| → ∞.', verify: `(solve(${c}*x+(${d}),x)[0], limit((${a}*x+(${b}))/(${c}*x+(${d})),x,oo))` },
        { command: 'Write down', prompt: `the range of $h(x) = \\sqrt{${k * k} - x^{2}}$. Give the least and greatest values.`, marks: 2, answer: { kind: 'tuple', labels: ['\\text{least}', '\\text{greatest}'], value: [0, k], exact: true, markEach: true, display: `0 \\le h(x) \\le ${k}` },
          ms: [['A1', '$0$'], ['A1', `$${k}$`]], working: [`Domain $-${k} \\le x \\le ${k}$; the graph is a semicircle of radius $${k}$`, `Range $0 \\le h(x) \\le ${k}$`], hint: 'Sketch it: y = √(r² − x²) is the top half of a circle.', errors: [{ value: [0, k * k], tag: 'forgot-root', fb: 'Take the square root of the largest value inside.' }], verify: `(0, sqrt(${k * k}))` },
        { command: 'Find', prompt: `the value of $c$ for which the line $y = ${lin(m, 0)} + c$ is a tangent to the curve $y = ${poly([[1, 'x^{2}'], [pp, 'x'], [q, '']])}$.`, marks: 4, answer: { kind: 'num', value: cTan, exact: true, display: String(cTan) },
          ms: [['M1', `$${poly([[1, 'x^{2}'], [pp, 'x'], [q, '']])} = ${lin(m, 0)} + c$`], ['A1', `$${poly([[1, 'x^{2}'], [pp - m, 'x'], [q, '']])} - c = 0$`], ['M1', '$\\Delta = 0$'], ['A1', `$c = ${cTan}$`]],
          working: [`$x^{2} ${sgn(pp - m)}x + (${q} - c) = 0$`, `Tangent: $\\Delta = ${(pp - m) ** 2} - 4(${q} - c) = 0$`, `$c = ${cTan}$`], hint: 'Set the equations equal, rearrange to = 0, and use Δ = 0 for exactly one intersection.',
          errors: [{ value: q - pp * pp / 4, tag: 'did-not-rearrange', fb: `Move the ${m}x term across before finding the discriminant.` }], verify: `solve(Eq((${pp - m})**2-4*(${q}-k),0),k)[0]` }
      ]
    };
  });

  /* ---------- 2.2 Partial fractions ---------- */
  reg('hl.partialfrac', { skill: 'HL-2.2b', title: 'Partial fractions (distinct linear factors)', paper: 1 }, R => {
    let A, B, a, b; do { A = R.nz(-5, 6); B = R.nz(-5, 6); [a, b] = R.distinct(2, -6, 7, [0]); } while (A + B === 0 || a === b);
    const p = A + B, qq = A * b + B * a, x0 = R.pick([1, 2, 3].filter(v => v !== -a && v !== -b));
    const val = fr(A, x0 + a).add(fr(B, x0 + b));
    return {
      stem: `$\\frac{${lin(p, qq)}}{${poly([[1, 'x^{2}'], [a + b, 'x'], [a * b, '']])}} \\equiv \\frac{A}{x ${sgn(a)}} + \\frac{B}{x ${sgn(b)}}$`,
      parts: [
        { command: 'Find', prompt: 'the values of $A$ and $B$.', marks: 4, answer: { kind: 'tuple', labels: ['A', 'B'], value: [A, B], exact: true, markEach: true, display: `A = ${A},\\ B = ${B}` },
          ms: [['M1', `denominator $= (x ${sgn(a)})(x ${sgn(b)})$`], ['M1', `$${lin(p, qq)} \\equiv A(x ${sgn(b)}) + B(x ${sgn(a)})$`], ['A1', `$A = ${A}$`], ['A1', `$B = ${B}$`]],
          working: [`$${lin(p, qq)} \\equiv A(x ${sgn(b)}) + B(x ${sgn(a)})$`, `$x = ${-a}$: $${p * -a + qq} = A(${b - a}) \\Rightarrow A = ${A}$`, `$x = ${-b}$: $${p * -b + qq} = B(${a - b}) \\Rightarrow B = ${B}$`],
          hint: 'Factorise the denominator, multiply through, then substitute values of x that make a bracket zero.', errors: [{ value: [B, A], tag: 'swapped', fb: 'A goes with (x ' + (a < 0 ? '−' : '+') + ' ' + Math.abs(a) + '). Check which value belongs to which fraction.' }],
          verify: `(Rational(${p}*(-(${a}))+(${qq}),-(${a})+(${b})), Rational(${p}*(-(${b}))+(${qq}),-(${b})+(${a})))` },
        { command: 'Hence', dep: true, prompt: `find the exact value of the expression when $x = ${x0}$.`, marks: 1, answer: { kind: 'num', value: val.val(), exact: true, display: val.tex() }, ms: [['A1', `$${val.tex()}$`]],
          working: [`$\\frac{${A}}{${x0 + a}} + \\frac{${B}}{${x0 + b}} = ${val.tex()}$`], hint: 'Substitute into your partial fractions (or into the original).', verify: `Rational(${p * x0 + qq},${x0 * x0 + (a + b) * x0 + a * b})` }
      ]
    };
  });

  /* ---------- 2.2 Absolute value & piecewise ---------- */
  reg('hl.abspiece', { skill: 'HL-2.2c', title: 'Absolute value equations and piecewise continuity', paper: 1 }, R => {
    let a, b, c, d, sols, ext;
    for (let g = 0; g < 200; g++) {
      a = R.pick([1, 2, 3]); b = R.nz(-6, 6); c = R.pick([-1, 1, 2, -2]); d = R.int(-4, 8);
      if (a === c || a === -c) continue;
      const x1 = fr(d - b, a - c), x2 = fr(-d - b, a + c); // ax+b = cx+d ; -(ax+b) = cx+d
      const ok = v => c * v.val() + d >= 0;
      sols = [x1, x2].filter(ok); ext = [x1, x2].filter(v => !ok(v));
      if (sols.length && ext.length && !x1.eq(x2)) break;
    }
    const p = R.int(1, 3), k = R.nz(-4, 5), m = p * p - k - k * p;
    return {
      stem: '',
      parts: [
        { command: 'Solve', prompt: `$|${lin(a, b)}| = ${lin(c, d)}$.`, marks: 4, answer: { kind: 'list', value: sols.map(v => v.val()), exact: true, boxes: 2, display: sols.map(v => `x = ${v.tex()}`).join(',\\ ') },
          ms: [['M1', `$${lin(a, b)} = ${lin(c, d)}$ or $-(${lin(a, b)}) = ${lin(c, d)}$`], ['A1', 'both candidate solutions'], ['R1', `rejecting $x = ${ext[0].tex()}$ (gives a negative RHS)`], ['A1', `$x = ${sols.map(v => v.tex()).join(',\\ ')}$`]],
          working: [`Case 1: $${lin(a, b)} = ${lin(c, d)}$; case 2: $-(${lin(a, b)}) = ${lin(c, d)}$`, `Candidates: $${[...sols, ...ext].map(v => v.tex()).join(',\\ ')}$`, `$|\\ldots| \\ge 0$, so the RHS must be $\\ge 0$: reject $x = ${ext[0].tex()}$`],
          hint: 'Solve both cases, then CHECK each answer in the original equation. Leave a box blank if it is not needed.', errors: [{ value: [...sols, ...ext].map(v => v.val()), tag: 'extraneous-root', fb: `x = ${num(round(ext[0].val(), 4))} makes the right-hand side negative, which an absolute value cannot equal.` }],
          verify: `solve(Eq(Abs(${a}*xr+(${b})),${c}*xr+(${d})),xr)` },
        { command: 'Find', prompt: `the value of $k$ for which the function defined by $f(x) = kx ${sgn(m)}$ for $x < ${p}$ and $f(x) = x^{2} - k$ for $x \\ge ${p}$ is continuous.`, marks: 3, answer: { kind: 'num', value: k, exact: true, display: String(k) },
          ms: [['M1', `$k(${p}) ${sgn(m)} = ${p}^{2} - k$`], ['A1', `$${p + 1}k = ${p * p - m}$`], ['A1', `$k = ${k}$`]], working: [`Both pieces must meet at $x = ${p}$: $${p}k ${sgn(m)} = ${p * p} - k$`, `$${p + 1}k = ${p * p - m} \\Rightarrow k = ${k}$`],
          hint: 'Continuous means the two pieces give the same value at the join.', verify: `solve(Eq(k*${p}+(${m}),${p}**2-k),k)[0]` }
      ]
    };
  });

  /* ---------- 2.3 Classification: odd/even, one-to-one ---------- */
  const PAR = [
    c => ({ tex: `x^{3} - ${c}x`, py: `x**3-${c}*x`, key: 'odd' }), c => ({ tex: `x^{4} + ${c}x^{2} - 1`, py: `x**4+${c}*x**2-1`, key: 'even' }), c => ({ tex: `x^{3} + ${c}`, py: `x**3+${c}`, key: 'neither' }),
    c => ({ tex: `\\frac{x}{x^{2} + ${c}}`, py: `x/(x**2+${c})`, key: 'odd' }), c => ({ tex: `x|x| + ${c}x`, py: `x*Abs(x)+${c}*x`, key: 'odd' }), c => ({ tex: `|x| + ${c}x^{2}`, py: `Abs(x)+${c}*x**2`, key: 'even' }),
    c => ({ tex: `x^{2} + ${c}x`, py: `x**2+${c}*x`, key: 'neither' }), c => ({ tex: `\\frac{x^{2} + ${c}}{x^{4} + 1}`, py: `(x**2+${c})/(x**4+1)`, key: 'even' })];
  reg('hl.classify', { skill: 'HL-2.3', title: 'Odd, even and one-to-one functions', paper: 1 }, R => {
    const c = R.int(1, 6), f = R.pick(PAR)(c), p = R.nz(-5, 5), q = R.int(-4, 9), cc = R.int(1, 5);
    const oneOne = mc(R, [{ tex: `$y = x^{3} + ${cc}$`, key: 'cube' }, { tex: `$y = x^{2} + ${cc}$`, key: 'sq' }, { tex: `$y = |x - ${cc}|$`, key: 'abs' }, { tex: `$y = x^{4} - ${cc}x^{2}$`, key: 'quart' }], 'cube');
    return {
      stem: '',
      parts: [
        { command: 'Determine', prompt: `whether $f(x) = ${f.tex}$ is odd, even or neither.`, marks: 2, answer: Object.assign(mc(R, [{ tex: 'Odd', key: 'odd' }, { tex: 'Even', key: 'even' }, { tex: 'Neither', key: 'neither' }], f.key), { display: f.key }),
          ms: [['M1', 'finding $f(-x)$'], ['A1', `${f.key}, since $f(-x) = ${f.key === 'odd' ? '-f(x)' : f.key === 'even' ? 'f(x)' : '\\text{neither } f(x) \\text{ nor } -f(x)'}$`]], working: [`Replace $x$ by $-x$ and compare with $f(x)$ and $-f(x)$.`],
          hint: 'Even: f(−x) = f(x). Odd: f(−x) = −f(x).', verify: `parity(${f.py})` },
        { command: 'Find', prompt: `the least value of $k$ such that $g(x) = ${poly([[1, 'x^{2}'], [-2 * p, 'x'], [q, '']])}$, $x \\ge k$, is one-to-one.`, marks: 2, answer: { kind: 'num', value: p, exact: true, display: String(p) },
          ms: [['M1', `vertex at $x = ${p}$`], ['A1', `$k = ${p}$`]], working: [`$g(x) = (x ${sgn(-p)})^{2} ${sgn(q - p * p)}$`, `One-to-one on one side of the vertex: $k = ${p}$`], hint: 'A parabola is one-to-one on either side of its vertex.', errors: [{ value: -p, tag: 'vertex-sign', fb: '$x = -\\frac{b}{2a}$: check the sign.' }], verify: `-Rational(${-2 * p},2)` },
        { command: 'State', prompt: 'which function is one-to-one on its whole domain $x\\in\\mathbb{R}$.', marks: 1, answer: Object.assign(oneOne, { display: `y = x^{3} + ${cc}` }), ms: [['A1', `$y = x^{3} + ${cc}$`]], working: ['It is strictly increasing, so it passes the horizontal line test.'], hint: 'Horizontal line test.', verify: `'cube' if is_increasing(x**3+${cc}, Interval(-oo,oo)) and solve(diff(x**3+${cc},x),x)==[0] and not is_monotonic(x**2+${cc}, Interval(-oo,oo)) and not is_monotonic(Abs(xr-${cc}), Interval(-oo,oo)) else 'x'` }
      ]
    };
  });

  /* ---------- 2.4 Composite functions ---------- */
  reg('hl.composite', { skill: 'HL-2.4a', title: 'Composite functions and their domains', paper: 1 }, R => {
    let a, b, c, d, e, p, T;
    for (let g = 0; g < 300; g++) {
      a = R.nz(-4, 5); b = R.nz(-6, 6); c = R.nz(-4, 4); d = R.pick([-3, -2, 2, 3]); e = R.nz(-5, 5); p = R.nz(-4, 4); T = R.nz(-6, 6);
      if (a === -b / c) continue; if (d * p + e === c) continue; if (T === a) continue; if (a * c + b === 0) continue; if ((b + T * c) === c * (T - a)) continue;
      break;
    }
    const f = v => fr(a).mul(v).add(b).div(F.of(v).sub(c)), gp = d * p + e, fogp = f(fr(gp)), gofp = p !== c ? fr(d).mul(f(fr(p))).add(e) : null;
    const xUndef = fr(c - e, d), K = d * T + e, xs = fr(b + T * c, T - a);
    return {
      stem: `Let $f(x) = \\frac{${lin(a, b)}}{x ${sgn(-c)}}$, $x \\ne ${c}$, and $g(x) = ${lin(d, e)}$.`,
      parts: [
        { command: 'Find', prompt: `$(f\\circ g)(${p})$.`, marks: 2, answer: { kind: 'num', value: fogp.val(), exact: true, display: fogp.tex() }, ms: [['M1', `$g(${p}) = ${gp}$`], ['A1', `$f(${gp}) = ${fogp.tex()}$`]],
          working: [`$g(${p}) = ${gp}$`, `$f(${gp}) = \\frac{${a * gp + b}}{${gp - c}} = ${fogp.tex()}$`], hint: 'Apply g first.', errors: c !== p ? [{ value: gofp.val(), tag: 'order-of-composition', fb: '(f∘g)(x) = f(g(x)): g first.' }] : [], verify: `((${a}*x+(${b}))/(x-(${c}))).subs(x,${d}*(${p})+(${e}))` },
        { command: 'Find', prompt: 'the value of $x$ that is excluded from the domain of $f\\circ g$.', marks: 2, answer: { kind: 'num', value: xUndef.val(), exact: true, display: `x = ${xUndef.tex()}` },
          ms: [['M1', `$g(x) = ${c}$`], ['A1', `$x = ${xUndef.tex()}$`]], working: [`$f$ is undefined at $${c}$, so we need $g(x) \\ne ${c}$`, `$${lin(d, e)} = ${c} \\Rightarrow x = ${xUndef.tex()}$`], hint: 'Which outputs of g can f not accept?',
          errors: [{ value: c, tag: 'domain-of-f-not-composite', fb: `x = ${c} is excluded from f. For f∘g, find the x that makes g(x) = ${c}.` }], verify: `solve(Eq(${d}*x+(${e}),${c}),x)[0]` },
        { command: 'Solve', prompt: `$(g\\circ f)(x) = ${K}$.`, marks: 3, answer: { kind: 'num', value: xs.val(), exact: true, display: `x = ${xs.tex()}` },
          ms: [['M1', `$${d}f(x) ${sgn(e)} = ${K}$`], ['A1', `$f(x) = ${T}$`], ['A1', `$x = ${xs.tex()}$`]], working: [`$${d}f(x) ${sgn(e)} = ${K} \\Rightarrow f(x) = ${T}$`, `$${lin(a, b)} = ${T}(x ${sgn(-c)})$`, `$x = ${xs.tex()}$`],
          hint: 'Undo g first to find what f(x) must equal.', verify: `solve(Eq(${d}*(${a}*x+(${b}))/(x-(${c}))+(${e}),${K}),x)[0]` }
      ]
    };
  });

  /* ---------- 2.4 Inverse functions ---------- */
  reg('hl.inverse', { skill: 'HL-2.4b', title: 'Inverse functions and self-inverse functions', paper: 1 }, R => {
    let a, b, c, d, K; do { a = R.nz(-4, 5); b = R.nz(-6, 6); c = R.pick([1, 2, -1, 3]); d = R.nz(-5, 5); K = R.nz(-6, 6); } while (a * d === b * c || K * c === a || (d * K - b) === 0);
    const finv = fr(d * K - b, a - c * K), m = fr(a, c); let bb, cc, dd; do { bb = R.nz(-6, 6); cc = R.pick([1, 2, 3]); dd = R.nz(-5, 5); } while (bb * cc + dd * dd === 0); // avoid a constant h
    return {
      stem: `Let $f(x) = \\frac{${lin(a, b)}}{${lin(c, d)}}$, $x \\ne ${fr(-d, c).tex()}$.`,
      parts: [
        { command: 'Find', prompt: `$f^{-1}(${K})$.`, marks: 3, answer: { kind: 'num', value: finv.val(), exact: true, display: finv.tex() },
          ms: [['M1', `$${K} = \\frac{${lin(a, b)}}{${lin(c, d)}}$ or interchanging $x$ and $y$`], ['M1', 'rearranging to make $x$ (or $y$) the subject'], ['A1', `$${finv.tex()}$`]],
          working: [`Solve $f(x) = ${K}$: $${lin(a, b)} = ${K}(${lin(c, d)})$`, `$x(${a} - ${paren(c * K)}) = ${d * K} - ${paren(b)}$`, `$x = ${finv.tex()}$`], hint: 'f⁻¹(k) is the x with f(x) = k.',
          errors: a * K + b !== 0 ? [{ value: (c * K + d) / (a * K + b), tag: 'reciprocal-not-inverse', fb: '$f^{-1}$ is not $\\frac{1}{f}$.' }] : [], verify: `solve(Eq((${a}*x+(${b}))/(${c}*x+(${d})),${K}),x)[0]` },
        { command: 'Write down', prompt: 'the value of $x$ that is not in the domain of $f^{-1}$.', marks: 1, answer: { kind: 'num', value: m.val(), exact: true, display: `x \\ne ${m.tex()}` }, ms: [['A1', `$${m.tex()}$`]],
          working: [`Domain of $f^{-1}$ = range of $f$; $f$ never equals its horizontal asymptote $y = ${m.tex()}$.`], hint: 'The domain of f⁻¹ is the range of f.', errors: [{ value: -d / c, tag: 'domain-not-range', fb: 'That value is excluded from the domain of f. The inverse swaps domain and range.' }], verify: `limit((${a}*x+(${b}))/(${c}*x+(${d})),x,oo)` },
        { command: 'Find', prompt: `the value of $k$ for which $h(x) = \\frac{kx ${sgn(bb)}}{${lin(cc, dd)}}$ is self-inverse.`, marks: 2, answer: { kind: 'num', value: -dd, exact: true, display: String(-dd) },
          ms: [['M1', '$h(h(x)) = x$ or $h^{-1} = h$'], ['A1', `$k = ${-dd}$`]], working: [`$h^{-1}(x) = \\frac{${dd === 0 ? '' : -dd}x ${sgn(bb)}}{${cc}x - k}$`, `Matching with $h$: $k = ${-dd}$`], hint: 'Find h⁻¹ and compare it with h.', errors: [{ value: dd, tag: 'sign', fb: 'Compare the denominators carefully.' }],
          verify: `(-(${dd})) if simplify(((-(${dd})*x+(${bb}))/(${cc}*x+(${dd}))).subs(x,(-(${dd})*x+(${bb}))/(${cc}*x+(${dd})))-x)==0 and simplify(((1-(${dd}))*x+(${bb}))/(${cc}*x+(${dd})) - x)!=0 else None` }
      ]
    };
  });

  /* ---------- 2.5 Transformations ---------- */
  reg('hl.transform', { skill: 'HL-2.5a', title: 'Sequences of transformations', paper: 1 }, R => {
    const p = R.nz(-5, 5), q = R.nz(-5, 6), h = R.nz(-4, 4), k = R.nz(-4, 4), a = R.pick([2, 3, 4]), b = R.pick([2, 3]);
    const img = [p + h, -a * (q + k)];
    const opts = [{ tex: `$y = -${a}f(x ${sgn(-h)}) ${sgn(-a * k)}$`, key: 'ok' }, { tex: `$y = -${a}f(x ${sgn(h)}) ${sgn(-a * k)}$`, key: 'h' }, { tex: `$y = -${a}f(x ${sgn(-h)}) ${sgn(k)}$`, key: 'k' }, { tex: `$y = ${a}f(x ${sgn(-h)}) ${sgn(a * k)}$`, key: 'refl' }];
    return {
      stem: `The point $P(${p},\\,${q})$ lies on $y = f(x)$. The graph is transformed by: a translation by the vector $\\binom{${h}}{${k}}$, followed by a vertical stretch with scale factor $${a}$, followed by a reflection in the $x$-axis.`,
      parts: [
        { command: 'Find', prompt: 'the coordinates of the image of $P$.', marks: 3, answer: { kind: 'tuple', labels: ['x', 'y'], value: img, exact: true, markEach: true, display: `(${img[0]},\\,${img[1]})` },
          ms: [['M1', `after translation $(${p + h},\\,${q + k})$`], ['A1', `$x = ${img[0]}$`], ['A1', `$y = ${img[1]}$`]], working: [`Translate: $(${p + h},\\,${q + k})$`, `Stretch: $(${p + h},\\,${a * (q + k)})$`, `Reflect: $(${img[0]},\\,${img[1]})$`],
          hint: 'Apply the transformations one at a time, in the order given.', errors: [{ value: [p + h, -a * q + k], tag: 'order-of-transformations', fb: 'Order matters: translate FIRST, then stretch and reflect.' }], verify: `(${p}+(${h}), -${a}*((${q})+(${k})))` },
        { command: 'Write down', prompt: 'the equation of the transformed graph.', marks: 2, answer: Object.assign(mc(R, opts, 'ok'), { display: opts[0].tex.replace(/\$/g, '') }), ms: [['A2', opts[0].tex]],
          working: [`$y = f(x ${sgn(-h)}) ${sgn(k)} \\to y = ${a}(f(x ${sgn(-h)}) ${sgn(k)}) \\to y = -${a}f(x ${sgn(-h)}) ${sgn(-a * k)}$`], hint: 'The stretch multiplies the WHOLE right-hand side, including the translation term.', verify: `'ok' if (-${a}*((${q})+(${k}))) == -${a}*(${q}) - ${a * k} else 'x'` },
        { command: 'Write down', prompt: `the image of $P$ on $y = f(${b}x)$.`, marks: 1, answer: { kind: 'tuple', labels: ['x', 'y'], value: [p / b, q], exact: true, display: `\\left(${fr(p, b).tex()},\\,${q}\\right)` }, ms: [['A1', `$\\left(${fr(p, b).tex()},\\,${q}\\right)$`]], working: [`Horizontal stretch, factor $\\frac{1}{${b}}$`], hint: 'Inside the function: the opposite of what it looks like.', errors: [{ value: [p * b, q], tag: 'horizontal-stretch-factor', fb: `Divide x by ${b}.` }], verify: `(Rational(${p},${b}),${q})` }
      ]
    };
  });

  reg('hl.modrecip', { skill: 'HL-2.5b', title: 'Modulus and reciprocal graphs', paper: 1 }, R => {
    let r1, r2; do { [r1, r2] = R.distinct(2, -5, 6); } while ((r1 + r2) % 2 !== 0); if (r1 > r2) [r1, r2] = [r2, r1];
    const h = (r1 + r2) / 2, mmin = -(((r2 - r1) / 2) ** 2), kk = R.pick(['inside', 'equal', 'above']);
    const kv = kk === 'inside' ? R.int(1, -mmin - 1) : kk === 'equal' ? -mmin : -mmin + R.int(1, 5); const count = kk === 'inside' ? 4 : kk === 'equal' ? 3 : 2;
    const kvv = kk === 'inside' && -mmin - 1 < 1 ? -mmin : kv; const cnt = kk === 'inside' && -mmin - 1 < 1 ? 3 : count;
    return {
      stem: `Let $f(x) = ${poly([[1, 'x^{2}'], [-(r1 + r2), 'x'], [r1 * r2, '']])}$.`,
      parts: [
        { command: 'Write down', prompt: 'the equations of the vertical asymptotes of $y = \\frac{1}{f(x)}$.', marks: 2, answer: { kind: 'list', value: [r1, r2], exact: true, markEach: true, display: `x = ${r1},\\ x = ${r2}` }, ms: [['A1', `$x = ${r1}$`], ['A1', `$x = ${r2}$`]],
          working: [`Zeros of $f$: $(x ${sgn(-r1)})(x ${sgn(-r2)}) = 0$`], hint: '$\\frac{1}{f(x)}$ has vertical asymptotes where $f(x) = 0$.', errors: [{ value: [-r1, -r2], tag: 'root-signs', fb: 'Solve f(x) = 0: the roots have the opposite sign to the numbers in the brackets.' }], verify: `solve(x**2-(${r1 + r2})*x+(${r1 * r2}),x)` },
        { command: 'Find', prompt: 'the coordinates of the local maximum point on the graph of $y = \\frac{1}{f(x)}$.', marks: 2, answer: { kind: 'tuple', labels: ['x', 'y'], value: [h, 1 / mmin], exact: true, markEach: true, display: `\\left(${h},\\,${fr(1, mmin).tex()}\\right)` },
          ms: [['M1', `minimum of $f$ at $(${h},\\,${mmin})$`], ['A1', `$\\left(${h},\\,${fr(1, mmin).tex()}\\right)$`]], working: [`$f$ has a minimum $(${h},\\,${mmin})$`, `The reciprocal turns it into a local maximum at $\\left(${h},\\,\\frac{1}{${mmin}}\\right)$`],
          hint: 'A minimum of $f$ below the $x$-axis becomes a maximum of $\\frac{1}{f}$. Take the reciprocal of the $y$-coordinate only.', errors: [{ value: [h, mmin], tag: 'did-not-take-reciprocal', fb: 'Take the reciprocal of the y-value.' }], verify: `(Rational(${r1 + r2},2), 1/((x**2-(${r1 + r2})*x+(${r1 * r2})).subs(x,Rational(${r1 + r2},2))))` },
        { command: 'Write down', prompt: `the number of solutions of $|f(x)| = ${kvv}$.`, marks: 1, answer: { kind: 'num', value: cnt, int: true, display: String(cnt) }, ms: [['A1', `$${cnt}$`]],
          working: [`Sketch $y = |f(x)|$: the part below the axis reflects up, with a local maximum height $${-mmin}$ at $x = ${h}$. Count intersections with $y = ${kvv}$.`], hint: 'Sketch y = |f(x)| and the horizontal line.', verify: `len(solve(Eq(Abs(xr**2-(${r1 + r2})*xr+(${r1 * r2})),${kvv}),xr))` }
      ]
    };
  });

  /* ---------- 3.1 Quadratic inequalities ---------- */
  reg('hl.quadineq', { skill: 'HL-3.1', title: 'Quadratic inequalities and the discriminant', paper: 1 }, R => {
    const [r1, r2] = R.distinct(2, -6, 7).sort((u, v) => u - v), s = R.int(2, 7), ge = R.bool();
    const opts = [{ tex: `$${r1} < x < ${r2}$`, key: 'in' }, { tex: `$x < ${r1}$ or $x > ${r2}$`, key: 'out' }, { tex: `$x \\le ${r1}$ or $x \\ge ${r2}$`, key: 'outE' }, { tex: `$${r1} \\le x \\le ${r2}$`, key: 'inE' }];
    const key = ge ? 'outE' : 'in';
    return {
      stem: '',
      parts: [
        { command: 'Solve', prompt: `$${poly([[1, 'x^{2}'], [-(r1 + r2), 'x'], [r1 * r2, '']])} ${ge ? '\\ge' : '<'} 0$.`, marks: 3, answer: Object.assign(mc(R, opts, key), { display: opts.find(o => o.key === key).tex.replace(/\$/g, '') }),
          ms: [['M1', `roots $${r1}$ and $${r2}$`], ['M1', 'sketch or sign diagram'], ['A1', opts.find(o => o.key === key).tex]], working: [`$(x ${sgn(-r1)})(x ${sgn(-r2)}) ${ge ? '\\ge' : '<'} 0$`, `Upward parabola: ${ge ? 'on or outside' : 'strictly between'} the roots`],
          hint: 'Find the roots, sketch the parabola, and read off where it is above/below the x-axis.', verify: `'${key}'` },
        { command: 'Find', prompt: `the set of values of $k$ for which $x^{2} + kx + ${s * s} > 0$ for all $x\\in\\mathbb{R}$. Give $a < k < b$.`, marks: 4, answer: { kind: 'tuple', labels: ['a', 'b'], value: [-2 * s, 2 * s], exact: true, markEach: true, display: `${-2 * s} < k < ${2 * s}` },
          ms: [['M1', '$\\Delta < 0$'], ['A1', `$k^{2} - ${4 * s * s} < 0$`], ['A1A1', `$${-2 * s} < k < ${2 * s}$`]], working: [`Always positive: no real roots, $\\Delta < 0$`, `$k^{2} - 4(${s * s}) < 0 \\Rightarrow ${-2 * s} < k < ${2 * s}$`],
          hint: 'An upward parabola is always positive when it never meets the x-axis.', errors: [{ value: [-s, s], tag: 'forgot-4ac', fb: 'Δ = k² − 4ac: include the 4.' }], verify: `tuple(sorted(solve(k**2-4*${s * s},k)))` }
      ]
    };
  });

  /* ---------- 3.2 Complex numbers ---------- */
  reg('hl.complex', { skill: 'HL-3.2', title: 'Complex numbers in Cartesian form', paper: 1 }, R => {
    const a = R.nz(-5, 6), b = R.nz(-5, 6), c = R.nz(-4, 5), d = R.nz(-4, 5), den = c * c + d * d;
    const re = fr(a * c + b * d, den), im = fr(b * c - a * d, den);
    const pp = R.nz(-4, 5), qq = R.int(1, 5);
    const ztex = (u, v) => v === 0 ? `${u}` : `${u} ${v < 0 ? '-' : '+'} ${Math.abs(v) === 1 ? '' : Math.abs(v)}\\mathrm{i}`;
    return {
      stem: `Let $z = ${ztex(a, b)}$ and $w = ${ztex(c, d)}$.`,
      parts: [
        { command: 'Find', prompt: '$zw$, giving your answer in the form $p + q\\mathrm{i}$.', marks: 2, answer: { kind: 'tuple', labels: ['p', 'q'], value: [a * c - b * d, a * d + b * c], exact: true, markEach: true, display: ztex(a * c - b * d, a * d + b * c) },
          ms: [['M1', 'expanding with $\\mathrm{i}^{2} = -1$'], ['A1', `$${ztex(a * c - b * d, a * d + b * c)}$`]], working: [`$(${ztex(a, b)})(${ztex(c, d)}) = ${a * c} ${sgn(a * d)}\\mathrm{i} ${sgn(b * c)}\\mathrm{i} ${sgn(b * d)}\\mathrm{i}^{2}$`, `$= ${ztex(a * c - b * d, a * d + b * c)}$`],
          hint: 'Expand like two brackets, then use i² = −1.', errors: [{ value: [a * c + b * d, a * d + b * c], tag: 'i-squared', fb: 'i² = −1, so the i² term changes sign.' }], verify: `(re(expand((${a}+${b}*I)*(${c}+${d}*I))), im(expand((${a}+${b}*I)*(${c}+${d}*I))))` },
        { command: 'Find', prompt: '$\\frac{z}{w}$, giving your answer in the form $p + q\\mathrm{i}$ where $p, q\\in\\mathbb{Q}$.', marks: 3, answer: { kind: 'tuple', labels: ['p', 'q'], value: [re.val(), im.val()], exact: true, markEach: true, display: `${re.tex()} ${im.n < 0 ? '-' : '+'} ${im.n < 0 ? im.neg().tex() : im.tex()}\\mathrm{i}` },
          ms: [['M1', `multiplying by $\\frac{w^{*}}{w^{*}} = \\frac{${ztex(c, -d)}}{${ztex(c, -d)}}$`], ['A1', `denominator $${den}$`], ['A1', `$${re.tex()} ${im.n < 0 ? '-' : '+'} ${im.n < 0 ? im.neg().tex() : im.tex()}\\mathrm{i}$`]],
          working: [`$\\frac{(${ztex(a, b)})(${ztex(c, -d)})}{${c}^{2} + ${d * d}} = \\frac{${ztex(a * c + b * d, b * c - a * d)}}{${den}}$`], hint: 'Multiply top and bottom by the conjugate of w.', verify: `(re(simplify((${a}+${b}*I)/(${c}+${d}*I))), im(simplify((${a}+${b}*I)/(${c}+${d}*I))))` },
        { command: 'Find', prompt: '$|z|$.', marks: 1, answer: { kind: 'num', value: Math.sqrt(a * a + b * b), exact: true, display: `\\sqrt{${a * a + b * b}}` }, ms: [['A1', `$\\sqrt{${a * a + b * b}}$`]], working: [`$|z| = \\sqrt{${a}^{2} + ${paren(b)}^{2}} = \\sqrt{${a * a + b * b}}$`], hint: 'Modulus = distance from the origin on the Argand diagram.', errors: [{ value: a * a + b * b, tag: 'forgot-root', fb: 'Take the square root.' }], verify: `Abs(${a}+${b}*I)` },
        { command: 'Solve', prompt: `$z^{2} ${sgn(-2 * pp)}z + ${pp * pp + qq * qq} = 0$, giving your answers in the form $p \\pm q\\mathrm{i}$, $q > 0$.`, marks: 3, answer: { kind: 'tuple', labels: ['p', 'q'], value: [pp, qq], exact: true, markEach: true, display: `${pp} \\pm ${qq === 1 ? '' : qq}\\mathrm{i}` },
          ms: [['M1', `$\\Delta = ${4 * pp * pp} - ${4 * (pp * pp + qq * qq)} = ${-4 * qq * qq}$`], ['A1', `$\\sqrt{\\Delta} = ${2 * qq}\\mathrm{i}$`], ['A1', `$${pp} \\pm ${qq === 1 ? '' : qq}\\mathrm{i}$`]],
          working: [`$z = \\frac{${2 * pp} \\pm \\sqrt{${-4 * qq * qq}}}{2} = \\frac{${2 * pp} \\pm ${2 * qq}\\mathrm{i}}{2} = ${pp} \\pm ${qq === 1 ? '' : qq}\\mathrm{i}$`], hint: 'Quadratic formula; the square root of a negative number gives i.',
          verify: `(re(solve(z**2-${2 * pp}*z+${pp * pp + qq * qq},z)[0]), abs(im(solve(z**2-${2 * pp}*z+${pp * pp + qq * qq},z)[0])))` }
      ]
    };
  });

  /* ---------- 3.3 Factor and remainder theorems ---------- */
  reg('hl.factorrem', { skill: 'HL-3.3', title: 'Factor and remainder theorems (simultaneous)', paper: 1 }, R => {
    let a, b, c, r, s; do { a = R.int(-6, 6); b = R.int(-9, 9); [r, s] = R.distinct(2, -3, 3, [0]); c = -(r ** 3 + a * r * r + b * r); } while (Math.abs(c) > 60 || c === 0);
    const Rm = s ** 3 + a * s * s + b * s + c;
    return {
      stem: `$p(x) = x^{3} + ax^{2} + bx ${sgn(c)}$, where $a, b\\in\\mathbb{Z}$. $(x ${sgn(-r)})$ is a factor of $p(x)$, and when $p(x)$ is divided by $(x ${sgn(-s)})$ the remainder is $${Rm}$.`,
      parts: [
        { command: 'Find', prompt: 'the values of $a$ and $b$.', marks: 5, answer: { kind: 'tuple', labels: ['a', 'b'], value: [a, b], exact: true, markEach: true, display: `a = ${a},\\ b = ${b}` },
          ms: [['M1', `$p(${r}) = 0$`], ['M1', `$p(${s}) = ${Rm}$`], ['A1', `$${r * r}a ${sgn(r)}b = ${-(r ** 3) - c}$ and $${s * s}a ${sgn(s)}b = ${Rm - s ** 3 - c}$`], ['A1', `$a = ${a}$`], ['A1', `$b = ${b}$`]],
          working: [`Factor theorem: $p(${r}) = ${r ** 3} + ${r * r}a ${sgn(r)}b ${sgn(c)} = 0$`, `Remainder theorem: $p(${s}) = ${s ** 3} + ${s * s}a ${sgn(s)}b ${sgn(c)} = ${Rm}$`, `Solving simultaneously: $a = ${a}$, $b = ${b}$`],
          hint: 'Factor theorem gives one equation, remainder theorem the other.', errors: [{ value: [b, a], tag: 'swapped', fb: 'Check which value is a and which is b.' }],
          verify: `tuple(solve([Eq((${r})**3+x*(${r})**2+y*(${r})+(${c}),0),Eq((${s})**3+x*(${s})**2+y*(${s})+(${c}),${Rm})],[x,y]).values())` }
      ]
    };
  });

  /* ---------- 3.4 Sum and product of roots ---------- */
  reg('hl.vieta', { skill: 'HL-3.4', title: 'Sum and product of roots of polynomials', paper: 1 }, R => {
    const an = R.pick([1, 2, 3, -2]), b = R.nz(-9, 9), c = R.nz(-9, 9), d = R.nz(-9, 9);
    const sum = fr(-b, an), sp = fr(c, an), prod = fr(-d, an), sq = sum.mul(sum).sub(sp.mul(2));
    return {
      stem: `The cubic equation $${poly([[an, 'x^{3}'], [b, 'x^{2}'], [c, 'x'], [d, '']])} = 0$ has roots $\\alpha$, $\\beta$ and $\\gamma$.`,
      parts: [
        { command: 'Write down', prompt: 'the value of $\\alpha + \\beta + \\gamma$.', marks: 1, answer: { kind: 'num', value: sum.val(), exact: true, display: sum.tex() }, ms: [['A1', `$${sum.tex()}$`]], working: [`Sum $= -\\frac{a_{n-1}}{a_n} = -\\frac{${b}}{${an}}$`], hint: 'Formula booklet: sum of roots $= -\\frac{a_{n-1}}{a_n}$.', errors: [{ value: -sum.val(), tag: 'vieta-sign', fb: 'Sum of roots is $-\\frac{a_{n-1}}{a_n}$: watch the sign.' }], verify: `re(N(sum(Poly(${an}*x**3+(${b})*x**2+(${c})*x+(${d}),x).nroots())))` },
        { command: 'Write down', prompt: 'the value of $\\alpha\\beta\\gamma$.', marks: 1, answer: { kind: 'num', value: prod.val(), exact: true, display: prod.tex() }, ms: [['A1', `$${prod.tex()}$`]], working: [`Product $= \\frac{(-1)^{3}a_0}{a_n} = \\frac{${-d}}{${an}}$`], hint: 'Product $= \\frac{(-1)^{n}a_0}{a_n}$.', errors: [{ value: -prod.val(), tag: 'vieta-sign', fb: 'For a cubic, (−1)³ = −1.' }], verify: `re(N(prod(Poly(${an}*x**3+(${b})*x**2+(${c})*x+(${d}),x).nroots())))` },
        { command: 'Find', prompt: 'the value of $\\alpha^{2} + \\beta^{2} + \\gamma^{2}$.', marks: 3, answer: { kind: 'num', value: sq.val(), exact: true, display: sq.tex() },
          ms: [['M1', '$(\\alpha + \\beta + \\gamma)^{2} - 2(\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha)$'], ['A1', `$\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = ${sp.tex()}$`], ['A1', `$${sq.tex()}$`]],
          working: [`$\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{${c}}{${an}}$`, `$\\left(${sum.tex()}\\right)^{2} - 2\\left(${sp.tex()}\\right) = ${sq.tex()}$`], hint: 'Expand (α + β + γ)² and rearrange.',
          errors: [{ value: sum.mul(sum).val(), tag: 'forgot-cross-terms', fb: '(α + β + γ)² also contains 2(αβ + βγ + γα).' }], verify: `re(N(sum(rt**2 for rt in Poly(${an}*x**3+(${b})*x**2+(${c})*x+(${d}),x).nroots())))` }
      ]
    };
  });

  /* ---------- 3.6 Systems of linear equations ---------- */
  reg('hl.systems', { skill: 'HL-3.6', title: 'Systems of linear equations', paper: 2 }, R => {
    let M, det, sol; const d3 = m => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
    do { M = [0, 1, 2].map(() => [R.nz(-3, 4), R.nz(-3, 4), R.nz(-3, 4)]); det = d3(M); } while (det === 0);
    sol = [R.nz(-4, 5), R.nz(-4, 5), R.int(-4, 5)]; const rhs = M.map(row => row[0] * sol[0] + row[1] * sol[1] + row[2] * sol[2]);
    const eq = (row, v) => `${poly([[row[0], 'x'], [row[1], 'y'], [row[2], 'z']])} = ${v}`;
    // k-system: rows [1,1,1],[1,2,k],[1,k,u]; det = (2u - k^2) - (u - k) + (k - 2) = -k^2 + 2k + u - 2 → choose integer roots
    const k1 = R.int(-3, 1), k2 = R.int(2, 5); // det = -(k-k1)(k-k2) = -k^2 + (k1+k2)k - k1k2 → need 2 = k1+k2 → adjust
    const kk1 = 1 - R.int(1, 4), kk2 = 2 - kk1, u = 2 - kk1 * kk2;
    return {
      stem: '',
      parts: [
        { command: 'Solve', prompt: `the system $\\quad ${eq(M[0], rhs[0])},\\quad ${eq(M[1], rhs[1])},\\quad ${eq(M[2], rhs[2])}$.`, marks: 3, answer: { kind: 'tuple', labels: ['x', 'y', 'z'], value: sol, exact: true, markEach: true, display: `x = ${sol[0]},\\ y = ${sol[1]},\\ z = ${sol[2]}` },
          ms: [['(M1)', 'use of GDC'], ['A2', `$x = ${sol[0]},\\ y = ${sol[1]},\\ z = ${sol[2]}$`]], working: ['NumWorks Equations app: enter all three equations and solve.'], hint: 'NumWorks: Equations app → add three equations → Solve.', numworks: { app: 'Equations', lines: [[eq(M[0], rhs[0]).replace(/\\,/g, ''), ''], [eq(M[1], rhs[1]), ''], [eq(M[2], rhs[2]), ''], ['Solve', `x=${sol[0]}  y=${sol[1]}  z=${sol[2]}`]] },
          verify: `tuple(solve([${M.map((row, i) => `Eq(${row[0]}*x+(${row[1]})*y+(${row[2]})*z,${rhs[i]})`).join(',')}],[x,y,z]).values())` },
        { command: 'Find', prompt: `the values of $k$ for which the system $x + y + z = 1,\\ x + 2y + kz = 3,\\ x + ky + ${u}z = 2$ does not have a unique solution.`, marks: 4, paper: 1, answer: { kind: 'list', value: [kk1, kk2], exact: true, markEach: true, display: `k = ${kk1},\\ k = ${kk2}` },
          ms: [['M1', 'determinant of coefficients $= 0$ (or row reduction)'], ['A1', `$-k^{2} + 2k ${sgn(u - 2)} = 0$`], ['A1A1', `$k = ${kk1},\\ ${kk2}$`]], working: [`$\\det\\begin{pmatrix}1&1&1\\\\1&2&k\\\\1&k&${u}\\end{pmatrix}$`.replace(/\\begin\{pmatrix\}.*\\end\{pmatrix\}/, '(\\text{coefficient matrix})'), `$= -k^{2} + 2k ${sgn(u - 2)} = -(k ${sgn(-kk1)})(k ${sgn(-kk2)})$`, `$k = ${kk1}$ or $k = ${kk2}$`],
          hint: 'No unique solution when the determinant of the coefficient matrix is zero (or use row reduction).', verify: `solve(Matrix([[1,1,1],[1,2,k],[1,k,${u}]]).det(),k)` }
      ]
    };
  });

  /* ---------- 4 Differentiation (HL) ---------- */
  reg('hl.limits', { skill: 'HL-4.1', title: 'Limits', paper: 1 }, R => {
    const a = R.nz(-6, 6), p = R.int(2, 7), q = R.nz(-9, 9), rr = R.int(2, 6), s = R.nz(-9, 9);
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `$\\lim_{x\\to ${a}} \\frac{x^{2} - ${a * a}}{x ${sgn(-a)}}$.`, marks: 2, answer: { kind: 'num', value: 2 * a, exact: true, display: String(2 * a) }, ms: [['M1', `$\\frac{(x ${sgn(-a)})(x ${sgn(a)})}{x ${sgn(-a)}}$`], ['A1', `$${2 * a}$`]], working: [`Factorise and cancel: $x ${sgn(a)} \\to ${2 * a}$`], hint: 'Direct substitution gives $\\frac{0}{0}$: factorise first.', errors: [{ value: 0, tag: 'substituted-0-over-0', fb: '$\\frac{0}{0}$ is not $0$: it is undefined. Simplify first.' }], verify: `limit((x**2-${a * a})/(x-(${a})),x,${a})` },
        { command: 'Find', prompt: `$\\lim_{x\\to\\infty} \\frac{${p}x^{2} ${sgn(q)}}{${rr}x^{2} ${sgn(s)}}$.`, marks: 2, answer: { kind: 'num', value: p / rr, exact: true, display: fr(p, rr).tex() }, ms: [['M1', 'dividing by $x^{2}$'], ['A1', `$${fr(p, rr).tex()}$`]], working: [`Divide by $x^{2}$; the constant terms $\\to 0$`], hint: 'Divide every term by the highest power of x.', errors: [{ value: q / s, tag: 'constants-not-leading', fb: 'As x → ∞ the x² terms dominate.' }], verify: `limit((${p}*x**2+(${q}))/(${rr}*x**2+(${s})),x,oo)` }
      ]
    };
  });

  reg('hl.chain', { skill: 'HL-4.3', title: 'Chain, product and quotient rules', paper: 1 }, R => {
    let a, b, p; do { a = R.nz(-3, 3); b = R.nz(-4, 4); p = R.nz(-2, 2); } while (a * p + b === 0);
    const nn = R.pick([2, 3]), u = a * p + b, fprime = 2 * p * Math.pow(u, nn) + nn * a * p * p * Math.pow(u, nn - 1);
    let c, q; do { c = R.nz(-4, 4); q = R.nz(-3, 3); } while (q + c === 0);
    const gprime = fr(q * q + 2 * c * q, (q + c) * (q + c));
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `$f'(${p})$, where $f(x) = x^{2}(${lin(a, b)})^{${nn}}$.`, marks: 4, answer: { kind: 'num', value: fprime, exact: true, display: String(fprime) },
          ms: [['M1', 'product rule'], ['A1', `$2x(${lin(a, b)})^{${nn}}$`], ['A1', `$${nn * a}x^{2}(${lin(a, b)})^{${nn - 1}}$ (chain rule)`], ['A1', `$${fprime}$`]],
          working: [`$f'(x) = 2x(${lin(a, b)})^{${nn}} + x^{2}\\cdot ${nn}(${lin(a, b)})^{${nn - 1}}\\cdot ${a}$`, `$f'(${p}) = ${2 * p}(${u})^{${nn}} + ${p * p}\\cdot ${nn}(${u})^{${nn - 1}}\\cdot ${paren(a)} = ${fprime}$`], hint: 'Product rule, and the chain rule for the bracket (don’t forget the derivative of the inside).',
          errors: [{ value: 2 * p * Math.pow(u, nn) + nn * p * p * Math.pow(u, nn - 1), tag: 'chain-rule-inside', fb: `Multiply by the derivative of the inside, ${a}.` }, { value: 2 * p * nn * a * Math.pow(u, nn - 1), tag: 'product-of-derivatives', fb: '(uv)′ = u′v + uv′, not u′v′.' }], verify: `diff(x**2*(${a}*x+(${b}))**${nn},x).subs(x,${p})` },
        { command: 'Find', prompt: `$g'(${q})$, where $g(x) = \\frac{x^{2}}{x ${sgn(c)}}$.`, marks: 3, answer: { kind: 'num', value: gprime.val(), exact: true, display: gprime.tex() },
          ms: [['M1', 'quotient rule'], ['A1', `$\\frac{2x(x ${sgn(c)}) - x^{2}}{(x ${sgn(c)})^{2}}$`], ['A1', `$${gprime.tex()}$`]], working: [`$g'(x) = \\frac{2x(x ${sgn(c)}) - x^{2}(1)}{(x ${sgn(c)})^{2}} = \\frac{x^{2} ${sgn(2 * c)}x}{(x ${sgn(c)})^{2}}$`, `$g'(${q}) = ${gprime.tex()}$`],
          hint: 'Quotient rule: $\\frac{vu\\prime - uv\\prime}{v^{2}}$.', errors: [{ value: fr(-(q * q + 2 * c * q), (q + c) * (q + c)).val(), tag: 'quotient-order', fb: 'The numerator is vu′ − uv′ (in that order).' }], verify: `diff(x**2/(x+(${c})),x).subs(x,${q})` }
      ]
    };
  });

  reg('hl.implicit', { skill: 'HL-4.6', title: 'Implicit differentiation and related rates', paper: 1 }, R => {
    let a, p, q; do { a = R.nz(-3, 3); p = R.nz(-3, 3); q = R.nz(-3, 3); } while (a * p + 2 * q === 0 || 2 * p + a * q === 0);
    const C = p * p + a * p * q + q * q, dydx = fr(-(2 * p + a * q), a * p + 2 * q);
    const rad = R.int(3, 9), rate = R.pick([0.2, 0.3, 0.5, 1.5]), dV = 4 * Math.PI * rad * rad * rate;
    return {
      stem: '',
      parts: [
        { command: 'Find', prompt: `the gradient of the curve $x^{2} ${sgn(a)}xy + y^{2} = ${C}$ at the point $(${p},\\,${q})$.`, marks: 5, answer: { kind: 'num', value: dydx.val(), exact: true, display: dydx.tex() },
          ms: [['M1', 'implicit differentiation'], ['A1', `$2x ${sgn(a)}y ${sgn(a)}x\\frac{dy}{dx}$ (product rule)`], ['A1', '$2y\\frac{dy}{dx}$'], ['M1', 'substituting the point'], ['A1', `$${dydx.tex()}$`]],
          working: [`$2x + ${a}\\left(y + x\\frac{dy}{dx}\\right) + 2y\\frac{dy}{dx} = 0$`, `$\\frac{dy}{dx} = -\\frac{2x ${sgn(a)}y}{${a}x + 2y}$`, `At $(${p},\\,${q})$: $\\frac{dy}{dx} = ${dydx.tex()}$`],
          hint: 'Differentiate every term with respect to x; use the product rule on the xy term.', errors: [{ value: fr(-2 * p, a * p + 2 * q).val(), tag: 'product-rule-missing', fb: `$\\frac{d}{dx}(${a}xy)$ needs the product rule: $${a}\\left(y + x\\frac{dy}{dx}\\right)$.` }],
          verify: `(-diff(x**2+(${a})*x*y+y**2,x)/diff(x**2+(${a})*x*y+y**2,y)).subs({x:${p},y:${q}})` },
        { command: 'Find', prompt: `The radius of a spherical balloon increases at $${rate}$ cm s$^{-1}$. Find the rate at which its volume increases when the radius is $${rad}$ cm.`, marks: 3, paper: 2, answer: { kind: 'num', value: dV, sf: 3, display: `${num(sf(dV, 3))}\\text{ cm}^{3}\\text{ s}^{-1}` },
          ms: [['M1', '$\\frac{dV}{dr} = 4\\pi r^{2}$'], ['M1', '$\\frac{dV}{dt} = \\frac{dV}{dr}\\times\\frac{dr}{dt}$'], ['A1', `$${num(sf(dV, 3))}$ cm³ s⁻¹`]], working: [`$\\frac{dV}{dt} = 4\\pi(${rad})^{2}(${rate}) = ${num(round(4 * rad * rad * rate, 4))}\\pi \\approx ${num(sf(dV, 3))}$`],
          hint: 'Chain rule: $\\frac{dV}{dt} = \\frac{dV}{dr}\\times\\frac{dr}{dt}$.', errors: [{ value: 4 / 3 * Math.PI * rad ** 3 * rate, tag: 'did-not-differentiate', fb: 'Differentiate $V = \\frac{4}{3}\\pi r^{3}$ before multiplying by $\\frac{dr}{dt}$.' }], verify: `4*pi*${rad}**2*Rational(${Math.round(rate * 10)},10)` }
      ]
    };
  });

  reg('hl.optim', { skill: 'HL-4.5', title: 'Optimisation: minimum surface area (NumWorks)', paper: 2 }, R => {
    const V = R.pick([330, 500, 750, 1000]), r = Math.cbrt(V / (2 * Math.PI)), A = 2 * Math.PI * r * r + 2 * V / r;
    return {
      stem: `A closed cylindrical can has volume $${V}$ cm³, radius $r$ cm and height $h$ cm.`,
      parts: [
        { command: 'Show that', prompt: `the surface area is $A = 2\\pi r^{2} + \\frac{${2 * V}}{r}$.`, marks: 2, answer: { kind: 'open', display: 'See markscheme' }, ms: [['M1', `$h = \\frac{${V}}{\\pi r^{2}}$`], ['AG', `$A = 2\\pi r^{2} + 2\\pi r\\cdot\\frac{${V}}{\\pi r^{2}} = 2\\pi r^{2} + \\frac{${2 * V}}{r}$`]], working: [`$\\pi r^{2}h = ${V}$`, `$A = 2\\pi r^{2} + 2\\pi rh = 2\\pi r^{2} + \\frac{${2 * V}}{r}$`], hint: 'Eliminate h using the volume.', verify: `simplify(2*pi*x**2+2*pi*x*(${V}/(pi*x**2)) - (2*pi*x**2+${2 * V}/x))==0` },
        { command: 'Find', dep: true, prompt: 'the value of $r$ that minimises $A$.', marks: 3, answer: { kind: 'num', value: r, sf: 3, display: num(sf(r, 3)) }, ms: [['M1', `$\\frac{dA}{dr} = 4\\pi r - \\frac{${2 * V}}{r^{2}}$`], ['M1', '$\\frac{dA}{dr} = 0$'], ['A1', `$r = ${num(sf(r, 3))}$`]],
          working: [`$4\\pi r = \\frac{${2 * V}}{r^{2}} \\Rightarrow r^{3} = \\frac{${V}}{2\\pi}$`, `$r = ${num(sf(r, 4))}$`], hint: 'Differentiate, set to zero (or use NumWorks Minimum).', numworks: { app: 'Grapher', lines: [[`$y=2\\pi x^{2}+\\frac{${2 * V}}{x}$`, ''], ['Minimum', `x=${num(sf(r, 4))}  y=${num(sf(A, 4))}`]] }, verify: `real_root(Rational(${V})/(2*pi),3)` },
        { command: 'Find', dep: true, prompt: 'the minimum surface area.', marks: 1, answer: { kind: 'num', value: A, sf: 3, display: `${num(sf(A, 3))}\\text{ cm}^{2}` }, ms: [['A1', `$${num(sf(A, 3))}$ cm²`]], working: [`$A = ${num(sf(A, 4))}$`], hint: 'Substitute your r (unrounded) into A.', verify: `(2*pi*x**2+${2 * V}/x).subs(x,real_root(Rational(${V})/(2*pi),3))` }
      ]
    };
  });

  /* ---------- 5 Statistics (HL) ---------- */
  reg('hl.statsT', { skill: 'HL-5.2', title: 'Effect of linear transformations on mean and SD', paper: 1 }, R => {
    const mu = R.int(12, 40), sd = R.int(2, 9), a = R.pick([2, 3, -2, 1.5, 0.5]), b = R.nz(-10, 15);
    return {
      stem: `A data set has mean $${mu}$ and standard deviation $${sd}$. Each value $x$ is transformed to $${a === 1 ? '' : num(a)}x ${sgn(b)}$.`,
      parts: [
        { command: 'Write down', prompt: 'the new mean.', marks: 1, answer: { kind: 'num', value: a * mu + b, exact: true, display: num(a * mu + b) }, ms: [['A1', `$${num(a * mu + b)}$`]], working: [`$${num(a)}(${mu}) ${sgn(b)} = ${num(a * mu + b)}$`], hint: 'The mean is affected by both the multiplication and the addition.', verify: `Rational(${Math.round(a * 10)},10)*${mu}+(${b})` },
        { command: 'Write down', prompt: 'the new standard deviation.', marks: 1, answer: { kind: 'num', value: Math.abs(a) * sd, exact: true, display: num(Math.abs(a) * sd) }, ms: [['A1', `$${num(Math.abs(a) * sd)}$`]], working: [`Adding $${b}$ does not change the spread; multiplying by $${num(a)}$ scales it by $|${num(a)}|$.`], hint: 'Does adding a constant change how spread out the data are?',
          errors: [{ value: a * sd + b, tag: 'sd-shifted', fb: 'Adding a constant shifts every value equally: the spread is unchanged.' }, { value: a * sd, tag: 'sd-negative', fb: 'Standard deviation is never negative: use |a|.' }], verify: `Abs(Rational(${Math.round(a * 10)},10))*${sd}` },
        { command: 'Write down', prompt: 'the new variance.', marks: 1, answer: { kind: 'num', value: a * a * sd * sd, exact: true, display: num(a * a * sd * sd) }, ms: [['A1', `$${num(a * a * sd * sd)}$`]], working: [`Variance $= (\\text{SD})^{2}$`], hint: 'Variance is the square of the standard deviation.', errors: [{ value: Math.abs(a) * sd * sd, tag: 'variance-scale', fb: 'Variance scales by a².' }], verify: `(Rational(${Math.round(a * 10)},10)*${sd})**2` }
      ]
    };
  });
  reg('hl.regression', { skill: 'HL-5.4', title: 'Correlation and regression (NumWorks)', paper: 2 }, R => regressionGen(R, 'HL-5.4'));
})(window.Hub = window.Hub || {});

/* Curriculum map: four teaching groups (A/B day), lesson-level skills with prerequisites, the 2026–27
   pacing calendars (pacing.js), IA checkpoints and Oxford 2019 section references (mapping only). */
(function (Hub) {
  'use strict';
  const GROUPS = {
    'SL-A': { id: 'SL-A', course: 'SL', day: 'A', block: 'Block 1', label: 'AA SL · A day', size: 24 },
    'SL-B': { id: 'SL-B', course: 'SL', day: 'B', block: 'Block 1', label: 'AA SL · B day', size: 22 },
    'HL-A': { id: 'HL-A', course: 'HL', day: 'A', block: 'Block 4', label: 'AA HL · A day', size: 26 },
    'HL-B': { id: 'HL-B', course: 'HL', day: 'B', block: 'Block 4', label: 'AA HL · B day', size: 22 }
  };
  const COURSES = { SL: 'IB Mathematics: Analysis & Approaches SL', HL: 'IB Mathematics: Analysis & Approaches HL' };
  const pacingKey = c => (c === 'SL' ? 'AA SL' : 'AA HL');

  /* Units — numbering follows the Oxford chapter order used in Miss Badmus' Drive folders. */
  const UNITS = {
    SL: [[1, 'Sequences & Series'], [2, 'Introducing Functions'], [3, 'Linear & Quadratic Functions'], [4, 'Rational Functions'], [5, 'Differentiation'], [6, 'Univariate Statistics'], [7, 'Bivariate Statistics'], [8, 'Probability'], [9, 'Exponentials & Logarithms'], [10, 'Integration'], [11, 'Geometry & Trigonometry'], [12, 'Trigonometric Functions'], [13, 'Further Calculus']],
    HL: [[1, 'Sequences, Series & Proof'], [2, 'Functions'], [3, 'Complex Numbers & Algebra'], [4, 'Differentiation'], [5, 'Statistics & Probability'], [6, 'Geometry & Trigonometry'], [7, 'Exponents, Logarithms & Integration'], [8, 'Further Calculus — Modelling Change'], [9, 'Vectors'], [10, 'Further Complex Numbers'], [11, 'Probability Distributions']]
  };
  /* Oxford 2019 section references (title + first page) — curriculum mapping only. */
  const OXFORD = {
    SL: { '1.1': ['Number patterns and sigma notation', 4], '1.2': ['Arithmetic and geometric sequences', 13], '1.3': ['Arithmetic and geometric series', 22], '1.4': ['Applications of arithmetic and geometric patterns', 36], '1.5': ['The binomial theorem', 44], '1.6': ['Proofs', 55], '2.1': ['What is a function?', 65], '2.2': ['Functional notation', 69], '2.3': ['Drawing graphs of functions', 75], '2.4': ['The domain and range of a function', 77], '2.5': ['Composite functions', 85], '2.6': ['Inverse functions', 92], '3.1': ['Gradient of a linear function', 110], '3.2': ['Linear functions', 115], '3.3': ['Transformations of functions', 131], '3.4': ['Graphing quadratic functions', 142], '3.5': ['Solving quadratic equations by factorization and completing the square', 155], '3.6': ['The quadratic formula and the discriminant', 164], '3.7': ['Applications of quadratics', 173], '4.1': ['The reciprocal function', 186], '4.2': ['Transforming the reciprocal function', 196], '4.3': ['Rational functions of the form (ax + b)/(cx + d)', 201], '5.1': ['Limits and convergence', 216], '5.2': ['The derivative function', 222], '5.3': ['Differentiation rules', 234], '5.4': ['Graphical interpretation of first and second derivatives', 240], '5.5': ['Application of differential calculus: optimization and kinematics', 260], '6.3': ['Measures of central tendency', 287], '6.4': ['Measures of dispersion', 296], '7.4': ['Least squares regression', 332] },
    HL: { '1.1': ['Sequences, series and sigma notation', 4], '1.2': ['Arithmetic and geometric sequences and series', 10], '1.3': ['Proof', 33], '1.4': ['Counting principles and the binomial theorem', 51], '2.1': ['Functional relationships', 75], '2.2': ['Special functions and their graphs', 81], '2.3': ['Classification of functions', 102], '2.4': ['Operations with functions', 108], '2.5': ['Function transformations', 117], '3.1': ['Quadratic equations and inequalities', 149], '3.2': ['Complex numbers', 161], '3.3': ['Polynomial equations and inequalities', 175], '3.4': ['The fundamental theorem of algebra', 184], '3.5': ['Solving equations and inequalities', 195], '3.6': ['Solving systems of linear equations', 200], '4.1': ['Limits, continuity and convergence', 220], '4.2': ['The derivative of a function', 236], '4.3': ['Differentiation rules', 249], '4.4': ['Graphical interpretation of the derivatives', 262], '4.5': ['Applications of differential calculus', 278], '4.6': ['Implicit differentiation and related rates', 288], '5.2': ['Descriptive statistics', 317], '5.4': ['Correlation, causation and linear regression', 347] }
  };

  /* Lesson-level skills. match: regex on the calendar activity text that marks the lesson where it is taught.
     taughtBefore: skills covered by the previous teacher before the calendar rows begin. gens: question generators. */
  const S = (id, unit, ox, name, prereq, match, gens, extra = {}) => Object.assign({ id, course: id.slice(0, 2), unit, ox, name, prereq, match, gens }, extra);
  const SKILLS = [
    S('SL-0.1', 1, null, 'Rounding, standard form & percentage error', [], /Number Systems and Rounding/i, ['sl.round']),
    S('SL-1.1', 1, '1.1', 'Sigma notation & number patterns', ['SL-0.1'], /\b1\.1\b/, ['sl.sigma']),
    S('SL-1.2a', 1, '1.2', 'Arithmetic sequences', ['SL-1.1'], /\b1\.2\b/, ['sl.arith']),
    S('SL-1.2b', 1, '1.2', 'Geometric sequences', ['SL-1.1'], /\b1\.2\b/, ['sl.geo']),
    S('SL-1.3a', 1, '1.3', 'Arithmetic series', ['SL-1.2a'], /\b1\.3\b/, ['sl.arseries']),
    S('SL-1.3b', 1, '1.3', 'Geometric series & sum to infinity', ['SL-1.2b'], /\b1\.3\b/, ['sl.geoseries']),
    S('SL-1.4', 1, '1.4', 'Compound interest & depreciation', ['SL-1.2b', 'SL-0.1'], /\b1\.4\b/, ['sl.finance']),
    S('SL-1.5a', 1, '1.5', 'Binomial expansion & coefficients', ['SL-1.1'], /1\.5 The binomial theorem \(Day 1/, ['sl.binom1']),
    S('SL-1.5b', 1, '1.5', 'General term: constant term & working backwards', ['SL-1.5a'], /1\.5 The binomial theorem \(Day 2/, ['sl.binom2']),
    S('SL-1.6', 1, '1.6', 'Simple deductive proof (LHS to RHS)', ['SL-1.5a'], /1\.6 Proofs/, ['sl.proof']),
    S('SL-2.1', 2, '2.1', 'Relations & functions', [], /2\.1 What is a function/, ['sl.function']),
    S('SL-2.2', 2, '2.2', 'Function notation & graphs', ['SL-2.1'], /2\.2 Functional notation/, ['sl.notation']),
    S('SL-2.4', 2, '2.4', 'Domain & range', ['SL-2.2'], /2\.4 The domain/, ['sl.domain']),
    S('SL-2.5', 2, '2.5', 'Composite functions', ['SL-2.2'], /2\.5 Composite/, ['sl.composite']),
    S('SL-2.6', 2, '2.6', 'Inverse functions', ['SL-2.5', 'SL-2.4'], /2\.6 Inverse/, ['sl.inverse']),
    S('SL-3.1', 3, '3.2', 'Gradient & linear functions', ['SL-2.2'], /3\.1 Gradient|3\.2 Linear/, ['sl.lines']),
    S('SL-3.3', 3, '3.3', 'Transformations of functions', ['SL-2.2'], /3\.3 Transformations/, ['sl.transform']),
    S('SL-3.4', 3, '3.4', 'Graphing quadratics', ['SL-3.3'], /3\.4 Graphing/, ['sl.vertex']),
    S('SL-3.5', 3, '3.5', 'Solving quadratics', ['SL-3.4'], /3\.5 Solving/, ['sl.solvequad']),
    S('SL-3.6', 3, '3.6', 'Quadratic formula & discriminant', ['SL-3.5'], /3\.6 The quadratic formula/, ['sl.discriminant']),
    S('SL-3.7', 3, '3.7', 'Applications of quadratics', ['SL-3.6'], /3\.7 Applications/, ['sl.quadapp']),
    S('SL-4.1', 4, '4.3', 'Reciprocal & rational functions', ['SL-2.4', 'SL-3.3'], /\b4\.[123]\b/, ['sl.rational']),
    S('SL-5.2', 5, '5.2', 'Derivatives, tangents & normals', ['SL-3.1'], /\b5\.[12]\b/, ['sl.deriv']),
    S('SL-5.4', 5, '5.4', 'Stationary points & concavity', ['SL-5.2'], /\b5\.[34]\b/, ['sl.stationary']),
    S('SL-5.5', 5, '5.5', 'Optimisation & kinematics', ['SL-5.4'], /\b5\.5\b/, ['sl.optim']),
    S('SL-6.3', 6, '6.3', 'Central tendency & dispersion', [], /\b6\.[1-4]\b/, ['sl.stats']),
    S('SL-7.4', 7, '7.4', 'Correlation & regression', ['SL-3.1'], /\b7\.[1-4]\b/, ['sl.regression']),

    S('HL-1.1', 1, '1.1', 'Sigma notation & series', [], null, ['hl.sigma'], { taughtBefore: '2026-10-09' }),
    S('HL-1.2a', 1, '1.2', 'Arithmetic & geometric sequences', ['HL-1.1'], null, ['hl.arithgeo'], { taughtBefore: '2026-10-09' }),
    S('HL-1.2b', 1, '1.2', 'Convergence & sum to infinity', ['HL-1.2a'], null, ['hl.convergence'], { taughtBefore: '2026-10-09' }),
    S('HL-1.2c', 1, '1.2', 'Financial applications', ['HL-1.2a'], null, ['hl.finance'], { taughtBefore: '2026-10-09' }),
    S('HL-1.3a', 1, '1.3', 'Proof: counterexample, contradiction, direct', [], /Proof by contradiction/, ['hl.proof']),
    S('HL-1.3b', 1, '1.3', 'Proof by induction', ['HL-1.1', 'HL-1.3a'], /induction/i, ['hl.induction']),
    S('HL-1.4a', 1, '1.4', 'Counting principles', [], null, ['hl.counting'], { taughtBefore: '2026-10-09' }),
    S('HL-1.4b', 1, '1.4', 'Binomial theorem incl. fractional & negative powers', ['HL-1.4a'], null, ['hl.binomial'], { taughtBefore: '2026-10-09' }),
    S('HL-2.1', 2, '2.1', 'Functional relationships: domain & range', [], /2\.1 Functional/, ['hl.funcrel']),
    S('HL-2.2a', 2, '2.2', 'Quadratic, rational & radical functions', ['HL-2.1'], /2\.2 Special functions and their graphs \(Day 1/, ['hl.special']),
    S('HL-2.2b', 2, '2.2', 'Partial fractions', ['HL-2.2a'], /2\.2 Special functions \(Day 2/, ['hl.partialfrac']),
    S('HL-2.2c', 2, '2.2', 'Absolute value & piecewise functions', ['HL-2.2a'], /2\.2 Special functions \(Day 2/, ['hl.abspiece']),
    S('HL-2.3', 2, '2.3', 'One-to-one, odd & even functions', ['HL-2.1'], /2\.3 Classification/, ['hl.classify']),
    S('HL-2.4a', 2, '2.4', 'Composite functions', ['HL-2.1'], /2\.4 .*composite/, ['hl.composite']),
    S('HL-2.4b', 2, '2.4', 'Inverse & self-inverse functions', ['HL-2.4a', 'HL-2.3'], /2\.4 .*inverse/, ['hl.inverse']),
    S('HL-2.5a', 2, '2.5', 'Transformations: translations, stretches, reflections', ['HL-2.2a'], /2\.5 Function transformations \(Day 1/, ['hl.transform']),
    S('HL-2.5b', 2, '2.5', 'Modulus & reciprocal graphs', ['HL-2.5a', 'HL-2.2c'], /2\.5 Function transformations \(Day 2/, ['hl.modrecip']),
    S('HL-3.1', 3, '3.1', 'Quadratic equations & inequalities', ['HL-2.2a'], /3\.1 Quadratic/, ['hl.quadineq']),
    S('HL-3.2', 3, '3.2', 'Complex numbers (Cartesian form)', ['HL-3.1'], /3\.2 Complex/, ['hl.complex']),
    S('HL-3.3', 3, '3.3', 'Factor & remainder theorems', ['HL-3.1'], /3\.3 Polynomial/, ['hl.factorrem']),
    S('HL-3.4', 3, '3.4', 'Sum & product of roots', ['HL-3.3', 'HL-3.2'], /3\.4 The fundamental/, ['hl.vieta']),
    S('HL-3.6', 3, '3.6', 'Systems of linear equations', ['HL-2.1'], /3\.6 Systems/, ['hl.systems']),
    S('HL-4.1', 4, '4.1', 'Limits & continuity', ['HL-2.2a'], /4\.1 Limits/, ['hl.limits']),
    S('HL-4.3', 4, '4.3', 'Chain, product & quotient rules', ['HL-4.1'], /4\.[23] /, ['hl.chain']),
    S('HL-4.5', 4, '4.5', 'Optimisation & kinematics', ['HL-4.3'], /4\.[45] /, ['hl.optim']),
    S('HL-4.6', 4, '4.6', 'Implicit differentiation & related rates', ['HL-4.3'], /4\.6 /, ['hl.implicit']),
    S('HL-5.2', 5, '5.2', 'Descriptive statistics', [], /5\.[12] /, ['hl.statsT']),
    S('HL-5.4', 5, '5.4', 'Correlation & regression', ['HL-5.2'], /5\.4 /, ['hl.regression'])
  ];
  const SKILL = Object.fromEntries(SKILLS.map(s => [s.id, s]));
  const skillsFor = course => SKILLS.filter(s => s.course === course);

  /* Calendar rows for a group (A or B day), annotated with the skills each lesson introduces. */
  const cache = {};
  function lessons(groupId) {
    if (cache[groupId]) return cache[groupId];
    const g = GROUPS[groupId], rows = ((window.PACING || {})[pacingKey(g.course)] || []).filter(r => r.day === g.day);
    const out = rows.map(r => {
      const sk = skillsFor(g.course).filter(s => s.match && s.match.test(r.activity)).map(s => s.id);
      const a = r.activity;
      const ia = /IA (Lesson|Checkpoint|work|year)/.test(a);
      const kind = /NO CLASS/i.test(a) ? 'none'
        : /(^|; )(UNIT \d+ TEST|Unit [\d–]+ Test|Semester Exams|End-of-Year Exam)/.test(a) && !/walk-through/i.test(a) ? 'test'
        : sk.length ? 'lesson' : ia ? 'ia' : 'review';
      return { date: r.date, day: r.day, activity: r.activity, skills: sk, kind, ia };
    });
    return (cache[groupId] = out);
  }
  /** First date the skill is taught to this group (or the taughtBefore date for previously taught content). */
  function taughtDate(skillId, groupId) {
    const s = SKILL[skillId]; if (!s) return null;
    if (s.taughtBefore) return s.taughtBefore;
    const row = lessons(groupId).find(l => l.skills.includes(skillId));
    return row ? row.date : null;
  }
  const isTaught = (skillId, groupId, asOf) => { const d = taughtDate(skillId, groupId); return !!d && d < asOf; };
  /** Next lesson on/after asOf (today's lesson counts), skipping no-class rows. */
  function nextLesson(groupId, asOf) { return lessons(groupId).find(l => l.date >= asOf && l.kind !== 'none') || null; }
  /** Next lesson that actually introduces new skills (for Do Now bridging). */
  function nextTeachingLesson(groupId, asOf) { return lessons(groupId).find(l => l.date >= asOf && l.skills.some(id => !isTaught(id, groupId, asOf))) || null; }
  function upcoming(groupId, asOf, n = 8) { return lessons(groupId).filter(l => l.date >= asOf).slice(0, n); }

  /* IA checkpoints (both calendars use the same names); dates differ for A and B days. */
  const IA_STEPS = [
    { id: 'cp1', match: /IA Lesson 1/, title: 'Checkpoint 1 · From an interest to a title', short: 'Topic & working title', focus: 'Choose a topic in your sweet spot and draft a working title.', criteria: ['C'] },
    { id: 'cp2', match: /Checkpoint 2/, title: 'Checkpoint 2 · Final title + introduction plan', short: 'Title + intro plan', focus: 'Final title that passes the checklist; plan Why me? · Aim · Plan · Key terms.', criteria: ['A', 'C'] },
    { id: 'cp3', match: /Checkpoint 3/, title: 'Checkpoint 3 · Research question & outline', short: 'RQ & outline', focus: 'A focused research question and a section-by-section outline.', criteria: ['A', 'E'] },
    { id: 'cp4', match: /Checkpoint 4/, title: 'Checkpoint 4 · Introduction paragraph draft', short: 'Intro draft', focus: 'Your own first draft of the introduction.', criteria: ['A', 'B', 'C'] },
    { id: 'cp5', match: /Checkpoint 5/, title: 'Checkpoint 5 · Introduction peer review', short: 'Peer review', focus: 'Give and receive criterion-referenced feedback.', criteria: ['A', 'B', 'D'] },
    { id: 'cp6', match: /Checkpoint 6/, title: 'Checkpoint 6 · Final introduction paragraph', short: 'Final intro', focus: 'Act on feedback; submit the final introduction.', criteria: ['A', 'B', 'C', 'D'] },
    { id: 'ws', match: /IA work session/, title: 'Work session · Maths plan & data', short: 'Maths plan & data', focus: 'Decide the mathematics and collect or source data.', criteria: ['E', 'B'] },
    { id: 'y1', match: /IA year 1 checkpoint/, title: 'Year 1 checkpoint · Exploration plan', short: 'Exploration plan', focus: 'Submit the full exploration plan for feedback.', criteria: ['A', 'B', 'C', 'D', 'E'] }
  ];
  function iaSchedule(groupId) { const L = lessons(groupId); return IA_STEPS.map(st => { const row = L.find(l => st.match.test(l.activity)); return Object.assign({}, st, { date: row ? row.date : null }); }); }
  const IA_CRITERIA = [
    ['A', 'Presentation', 4, 'Well organised, coherent and concise: a reader can follow it without re-reading.'],
    ['B', 'Mathematical communication', 4, 'Correct notation, symbols and terminology; key terms defined; graphs and tables labelled.'],
    ['C', 'Personal engagement', 3, 'Your own thinking: genuine interest, independent decisions, creativity.'],
    ['D', 'Reflection', 3, 'Critical reflection on results, methods and limitations, all the way through.'],
    ['E', 'Use of mathematics', 6, 'Relevant mathematics at the level of the course, correct and demonstrating understanding.']
  ];
  const COMMAND_TERMS = {
    'Write down': 'Little or no working is needed — the answer can be read off or obtained quickly.',
    'Find': 'Get the answer and show the relevant stages of your working.',
    'Calculate': 'Get a numerical answer, showing the relevant working.',
    'Show that': 'Reach the given result using correct steps; the answer is given, so the working is the point.',
    'Hence': 'Use the previous part to reach the answer.',
    'Solve': 'Find the value(s) using algebraic, numerical and/or graphical methods.',
    'Prove': 'A formal sequence of logical steps leading to the result.',
    'Determine': 'Find the only possible answer.',
    'State': 'Give a specific name, value or short answer without explanation.',
    'Verify': 'Give evidence that confirms the statement is true.',
    'Explain': 'Give a detailed account including reasons or causes.',
    'Write': 'Present the expression in the form requested.',
    'Use': 'Apply the given method or result.'
  };

  Hub.curriculum = { GROUPS, COURSES, UNITS, OXFORD, SKILLS, SKILL, skillsFor, lessons, taughtDate, isTaught, nextLesson, nextTeachingLesson, upcoming, iaSchedule, IA_STEPS, IA_CRITERIA, COMMAND_TERMS };
})(window.Hub = window.Hub || {});

window.Hub.store={state,save(){},log(what){state.log.push({at:new Date().toISOString(),who:session.name,what});state.log=state.log.slice(-400)}};window.Hub.auth={who:()=>session.name,isPreview:()=>false,isTeacher:()=>session.role==='teacher'};
/* CSV import merges by verified-email identity; existing work is preserved. */
(function(Hub){
 'use strict';const S=()=>Hub.store.state;
 const all=()=>S().roster.students.filter(s=>s.active!==false),byId=id=>S().roster.students.find(s=>s.id===id),byEmail=e=>all().find(s=>s.email.toLowerCase()===String(e).toLowerCase()),inGroup=g=>all().filter(s=>s.group===g),inCourse=c=>all().filter(s=>s.course===c);
 function parseImport(text){
 const records=[],errors=[];let row=[],cell='',quoted=false;const sep=text.split(/\r?\n/)[0].includes('\t')?'\t':',';
 text=String(text).replace(/^\uFEFF/,'');
 for(let i=0;i<=text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
 else if((c===sep||c==='\n'||c===undefined)&&!quoted){row.push(cell.trim());cell='';if(c!==sep){if(row.some(Boolean))records.push(row);row=[];}}else if(c!=='\r')cell+=c||'';}
 if(quoted)errors.push('Unclosed quotation mark.');
 let names=['name','email','group'];if(records[0]?.some(x=>/^email$/i.test(x))){names=records.shift().map(x=>x.toLowerCase().trim());}
 const rows=[],seen=new Set();records.forEach((r,i)=>{const name=r[names.indexOf('name')],email=r[names.indexOf('email')]?.toLowerCase(),group=r[names.indexOf('group')]?.toUpperCase().replace(/\s+/g,'-');
 if(!name||!/^\S+@\S+\.\S+$/.test(email||'')||!['HL-A','HL-B','SL-A','SL-B'].includes(group)){errors.push('Row '+(i+2)+': expected name, valid email, and SL-A / SL-B / HL-A / HL-B.');return;}
 if(seen.has(email)){errors.push('Duplicate email: '+email);return;}seen.add(email);rows.push({name,email,group,course:group.slice(0,2)});
 });return {rows,errors};
 }
 function applyImport(rows){const st=S();for(const r of rows){const existing=st.roster.students.find(s=>s.email.toLowerCase()===r.email);if(existing)Object.assign(existing,r,{active:true});else st.roster.students.push({...r,id:crypto.randomUUID(),active:true});}st.roster.source='imported';Hub.store.log('Merged '+rows.length+' roster rows; existing work preserved');Hub.store.save(true);}
 Hub.roster={all,byId,byEmail,inGroup,inCourse,parseImport,applyImport};
})(window.Hub=window.Hub||{});

/* Mastery model (transparent, explainable):
   - Evidence rows: {sid, skill, earned, max, date, source, preview?, superseded?}
   - Weight = source weight × recency (half-life, default 21 days) × 0.5 if superseded by a later retake.
   - Mastery % = Σ w·earned / Σ w·max. "Evidence" = Σ w·max (weighted marks seen).
   - Status: not taught yet · no evidence · too little evidence (< minEvidence weighted marks) · revisit (<60) · developing (60–79) · secure (≥80).
   These are classroom indicators, not IB grade boundaries. Preview (bridge) questions never count. */
(function (Hub) {
  'use strict';
  const SOURCE_W = { 'Unit test': 1, 'Retest': 1, 'Quiz': 1, 'Exit Ticket': 0.8, 'Do Now': 0.7, 'Homework': 0.6, 'Practice': 0.5 };
  const STATUS = {
    'not-taught': { label: 'Not taught yet', short: '—', cls: 'st-nt' },
    'no-evidence': { label: 'No evidence yet', short: '?', cls: 'st-ne' },
    'low-evidence': { label: 'Too little evidence', short: '?', cls: 'st-le' },
    'revisit': { label: 'Revisit', short: 'R', cls: 'st-r' },
    'developing': { label: 'Developing', short: 'D', cls: 'st-d' },
    'secure': { label: 'Secure', short: 'S', cls: 'st-s' }
  };
  const S = () => Hub.store.state;
  const asOf = () => S().settings.asOf || Hub.core.todayISO();

  function rows(sid, skill) { const d = asOf(); return S().evidence.filter(e => e.sid === sid && e.skill === skill && !e.preview && e.date <= d); }
  function weight(e, today, half) { const age = Math.max(0, Hub.core.daysBetween(e.date, today)); return (SOURCE_W[e.source] ?? 0.6) * Math.pow(0.5, age / half) * (e.superseded ? 0.5 : 1) * (e.hinted ? 0.6 : 1); }

  /** Full statistics for one student × skill. */
  function stat(sid, skill) {
    const st = S(), today = asOf(), half = st.settings.halfLifeDays || 21, minEv = st.settings.minEvidence || 3;
    const student = Hub.roster.byId(sid), group = student ? student.group : null;
    const R = rows(sid, skill);
    let we = 0, wm = 0, re = 0, rm = 0, raw = 0, rawMax = 0, last = null; const recentCut = Hub.core.addDays(today, -21);
    for (const e of R) {
      const w = weight(e, today, half); we += w * e.earned; wm += w * e.max; raw += e.earned; rawMax += e.max;
      if (e.date >= recentCut) { re += e.earned; rm += e.max; }
      if (!last || e.date > last) last = e.date;
    }
    const taught = group ? Hub.curriculum.isTaught(skill, group, today) : true;
    const p = wm > 0 ? Math.round(100 * we / wm) : null;
    let status;
    if (!R.length) status = taught ? 'no-evidence' : 'not-taught';
    else if (wm < minEv * 0.5 || rawMax < minEv) status = 'low-evidence';
    else status = p < 60 ? 'revisit' : p < 80 ? 'developing' : 'secure';
    const tags = {}; R.forEach(e => (e.tags || []).forEach(t => (tags[t] = (tags[t] || 0) + 1)));
    return { sid, skill, pct: p, cumulative: rawMax ? Math.round(100 * raw / rawMax) : null, recent: rm ? Math.round(100 * re / rm) : null, evidence: Math.round(wm * 10) / 10, marks: rawMax, n: R.length, last, taught, status, tags };
  }
  const studentSkills = sid => { const s = Hub.roster.byId(sid); return s ? Hub.curriculum.skillsFor(s.course).map(k => stat(sid, k.id)) : []; };
  /** Average over students in a group for a skill (only students with enough evidence). */
  function groupSkill(groupId, skill) {
    const st = Hub.roster.inGroup(groupId).map(s => stat(s.id, skill)), solid = st.filter(x => !['not-taught', 'no-evidence', 'low-evidence'].includes(x.status));
    const avg = solid.length ? Math.round(solid.reduce((a, x) => a + x.pct, 0) / solid.length) : null;
    const counts = {}; st.forEach(x => (counts[x.status] = (counts[x.status] || 0) + 1));
    return { skill, avg, n: solid.length, counts, taught: st.length ? st[0].taught : false };
  }
  function overall(sid) { const xs = studentSkills(sid).filter(x => x.pct !== null && x.status !== 'low-evidence'); return xs.length ? Math.round(xs.reduce((a, x) => a + x.pct, 0) / xs.length) : null; }
  /** Misconception counts across a group (optionally within the last N days). */
  function misconceptions(groupId, days = 28) {
    const ids = new Set(Hub.roster.inGroup(groupId).map(s => s.id)), cut = Hub.core.addDays(asOf(), -days), out = {};
    S().evidence.forEach(e => { if (ids.has(e.sid) && e.date >= cut) (e.tags || []).forEach(t => { const k = e.skill + '|' + t; out[k] = out[k] || { skill: e.skill, tag: t, n: 0, students: new Set() }; out[k].n++; out[k].students.add(e.sid); }); });
    return Object.values(out).map(o => Object.assign(o, { students: o.students.size })).sort((a, b) => b.students - a.students || b.n - a.n);
  }
  const TAG_TEXT = {
    'term-not-sum': 'Used uₙ instead of Sₙ', 'n-minus-1': 'Off by one in (n − 1)', 'not-checking-both': 'Did not check both neighbouring values', 'constant-once': 'Added the constant once in Σ', 'off-by-one-terms': 'Miscounted terms in Σ',
    'count-terms': 'Number of terms: forgot + 1', 'round-down': 'Rounded n down instead of up', 'sinf-sign': 'S∞ denominator sign', 'missing-ncr': 'Missing binomial coefficient', 'power-on-coefficient': 'Did not raise the coefficient to the power',
    'sign': 'Sign error', 'forgot-square': 'Forgot to square root at the end', 'order-of-composition': 'Composite in the wrong order', 'reciprocal-not-inverse': 'Confused f⁻¹ with the reciprocal of f', 'applied-f': 'Applied f instead of f⁻¹',
    'parallel-not-perpendicular': 'Used the parallel gradient', 'reciprocal-no-sign': 'Reciprocal without the sign change', 'translation-direction': 'Horizontal translation direction', 'horizontal-stretch-factor': 'Horizontal stretch factor inverted',
    'axis-sign': 'Axis of symmetry sign', 'root-signs': 'Root signs from factors', 'vertex-sign': 'Vertex form sign', 'forgot-4ac': 'Discriminant: forgot 4ac', 'missing-negative-root': 'Missed the negative root',
    'annual-not-compounded': 'Ignored compounding periods', 'simple-interest': 'Used simple growth', 'truncated': 'Truncated instead of rounding', 'pct-wrong-denominator': 'Percentage error over the estimate', 'standard-form-sign': 'Standard form power sign',
    'not-exact': 'Gave a decimal where exact was required', 'geometric-from-r-0': 'Geometric sum started at r = 0', 'extraneous-root': 'Kept an extraneous root', 'extra-solution': 'Gave an extra (invalid) solution', 'swapped': 'Values swapped',
    'did-not-rearrange': 'Did not rearrange before Δ', 'endpoints-only': 'Range from end-points only', 'i-squared': 'Treated i² as +1', 'vieta-sign': 'Sign of the sum or product of roots', 'forgot-cross-terms': 'Forgot cross terms when squaring',
    'chain-rule-inside': 'Chain rule: missed the inner derivative', 'product-of-derivatives': 'Multiplied derivatives (product rule)', 'quotient-order': 'Quotient rule order', 'product-rule-missing': 'Implicit: missed product rule on xy',
    'did-not-differentiate': 'Did not differentiate before chain rule', 'sd-shifted': 'Shifted the SD by the constant', 'repeats-not-divided': 'Did not divide by repeats', 'ignored-restriction': 'Ignored the restriction', 'forgot-internal-arrangement': 'Forgot the pair can swap',
    'sign-of-negative-term': 'Lost the negative sign in the general term', 'did-not-factor': 'Did not factor out the constant first', 'inverted-validity': 'Validity interval inverted', 'did-not-take-reciprocal': 'Did not take the reciprocal', 'domain-of-f-not-composite': 'Domain of f, not of f∘g',
    'domain-not-range': 'Confused domain and range of the inverse', 'term-off': 'Wrong term', 'time-not-height': 'Gave the time, not the height', 'ignored-start-height': 'Ignored the starting height', 'inverted-gradient': 'Gradient upside down', 'forgot-root': 'Forgot the square root',
    'negative-squared': 'Squared a negative without brackets', 'difference-sign': 'Subtracted the wrong way round', 'steps-count': 'Counted steps between terms wrongly', 'power-count': 'Wrong number of ratio steps', 'multiplied-not-divided': 'Multiplied instead of dividing',
    'perm-not-comb': 'Used permutations not combinations', 'terms-n': 'Number of terms: n not n + 1', 'forgot-constant-power': 'Forgot to raise the constant to r', 'halved': 'Halved instead of square rooting', 'multiplied': 'Multiplied instead of dividing',
    'constants-not-leading': 'Used constants, not leading coefficients', 'power-rule-negative': 'Power rule sign for x⁻¹', 'x-not-area': 'Gave x, not the area', 'forgot-q3': 'Fence not added to Q3', 'square-of-sum': 'Missed the middle term when squaring',
    'inverse-sign': 'Inverse: undid + with +', 'sd-negative': 'Negative SD', 'variance-scale': 'Variance scaled by |a| not a²', 'added-not-multiplied': 'Added instead of multiplying', 'powers-swapped': 'Powers swapped in the general term', 'substituted-0-over-0': 'Treated zero over zero as 0', 'last-term-only': 'Used only the last term', 'leading-zeros': 'Counted leading zeros'
  };
  const tagText = t => TAG_TEXT[t] || t.replace(/-/g, ' ');
  Hub.mastery = { stat, studentSkills, groupSkill, overall, misconceptions, STATUS, SOURCE_W, tagText, asOf };
})(window.Hub = window.Hub || {});

/* Assessment lifecycle and marking.
   draft → (every question reviewed) → approved → published to chosen groups → closed/archived.
   Editing or regenerating any question withdraws its review tick; editing an approved assessment returns it to draft.
   Published assessments are locked (duplicate to change). Teacher previews never create attempts or evidence. */
(function (Hub) {
  'use strict';
  const { uid, toCSV, pct } = Hub.core;
  const S = () => Hub.store.state, A = id => S().assessments.find(a => a.id === id);
  const TYPES = {
    'Exit Ticket': { count: 2, upload: false, release: 'auto', minutes: 8 },
    'Quiz': { count: 4, upload: true, release: 'hold', minutes: 25 },
    'Homework': { count: 5, upload: false, release: 'auto', minutes: 40, mc: true },
    'Unit test': { count: 8, upload: true, release: 'hold', minutes: 60 },
    'Retest': { count: 6, upload: true, release: 'hold', minutes: 60 }
  };
  const hist = (a, what) => { a.history = a.history || []; a.history.push({ at: new Date().toISOString(), who: Hub.auth.who(), what }); };

  /* ---------- values as TeX (for multiple-choice options) ---------- */
  function valueTex(v) {
    if (Number.isInteger(v)) return String(v);
    for (let q = 2; q <= 200; q++) { const p = Math.round(v * q); if (Math.abs(v - p / q) < 1e-9) return Hub.qcore.fr(p, q).tex(); }
    const s2 = v * v; if (Math.abs(s2 - Math.round(s2)) < 1e-9 && Math.round(s2) < 1000) return (v < 0 ? '-' : '') + `\\sqrt{${Math.round(s2)}}`;
    return Hub.qcore.num(Hub.qcore.sf(v, 4));
  }
  /** Convert a numeric part into multiple choice; distractors come from its known misconceptions. */
  function toMC(part, seed) {
    if (part.answer.kind !== 'num') return part;
    const R = Hub.qcore.rng(seed), key = part.answer.value, vals = [key];
    (part.errors || []).forEach(e => { const v = Array.isArray(e.value) ? e.value[0] : e.value; if (Number.isFinite(v) && !vals.some(x => Math.abs(x - v) < 1e-9)) vals.push(v); });
    const tweak = [k => -k, k => k + 1, k => k - 1, k => 2 * k, k => k / 2, k => k + 2];
    for (let g = 0; vals.length < 4 && g < 40; g++) { const v = R.pick(tweak)(key); if (Number.isFinite(v) && !vals.some(x => Math.abs(x - v) < 1e-9)) vals.push(v); }
    const opts = vals.slice(0, 4).map((v, i) => ({ tex: '$' + (i === 0 && part.answer.display && !/[a-z]{3,}|=|\\le|\\ge|<|>/i.test(part.answer.display) ? part.answer.display : valueTex(v)) + '$', key: 'v' + i, v }));
    const m = Hub.qcore.mc(R, opts, 'v0');
    const errors = (part.errors || []).map(e => { const v = Array.isArray(e.value) ? e.value[0] : e.value; const k = opts.find(o => Math.abs(o.v - v) < 1e-9); return k ? { choice: m.keys.indexOf(k.key), tag: e.tag, fb: e.fb } : null; }).filter(Boolean);
    return Object.assign({}, part, { answer: Object.assign(m, { display: part.answer.display }), errors, wasNumeric: true });
  }

  /* ---------- drafts ---------- */
  function pickGenerators(skills, paper) {
    const gens = skills.flatMap(id => (Hub.curriculum.SKILL[id] || { gens: [] }).gens);
    return gens.filter(g => { const r = Hub.qcore.registry[g]; return r && (paper !== 'P1' || r.paper === 1); });
  }
  function createDraft(o) {
    const t = TYPES[o.type] || TYPES.Quiz, gens = pickGenerators(o.skills, o.paper);
    if (!gens.length) return { ok: false, error: o.paper === 'P1' ? 'No Paper 1 (non-calculator) questions exist for that selection yet. Try Mixed.' : 'Choose at least one skill.' };
    const n = Math.max(1, Math.min(12, Number(o.count) || t.count)), qs = [];
    for (let i = 0; i < n; i++) qs.push(buildQ(gens[i % gens.length], o.rigour === 'challenge', o.type === 'Homework' || o.mc));
    const a = { id: uid('a'), course: o.course, title: o.title || defaultTitle(o), type: o.type, lessonDate: o.lessonDate || null, skills: o.skills.slice(), paper: o.paper || 'Mixed', rigour: o.rigour || 'standard',
      questions: qs, reviewed: {}, status: 'draft', version: 1, groups: o.groups || [], uploadRequired: t.upload, release: t.release, minutes: t.minutes, due: null, retestOf: o.retestOf || null, cap: o.type === 'Retest' ? 80 : null, createdAt: new Date().toISOString(), history: [] };
    hist(a, 'Draft generated'); S().assessments.unshift(a); Hub.store.log(`Generated draft “${a.title}”`); Hub.store.save(); return { ok: true, assessment: a };
  }
  function defaultTitle(o) { const sk = o.skills.map(id => Hub.curriculum.SKILL[id]).filter(Boolean); return `${o.course} · ${sk.length === 1 ? sk[0].ox ? sk[0].ox + ' ' + sk[0].name : sk[0].name : 'Unit ' + (sk[0] ? sk[0].unit : '')} · ${o.type}`; }
  function buildQ(gen, challenge, mcOnly) {
    const seed = Math.floor(Math.random() * 1e6) + 1, q = Hub.qcore.build(gen, seed, { challenge });
    if (mcOnly) q.parts = q.parts.filter(p => p.answer.kind !== 'open').map((p, i) => toMC(p, seed + i));
    q.marks = q.parts.reduce((s, p) => s + p.marks, 0); return q;
  }
  function edited(a, qid, what) {
    if (qid) delete a.reviewed[qid];
    if (a.status === 'approved') { a.status = 'draft'; hist(a, 'Edited after approval — approval withdrawn'); }
    hist(a, what); Hub.store.save();
  }
  function editable(a) { return a && (a.status === 'draft' || a.status === 'approved'); }
  function updatePart(aid, qid, pid, patch) {
    const a = A(aid); if (!editable(a)) return false; const q = a.questions.find(x => x.id === qid); const p = q && q.parts.find(x => x.id === pid); if (!p) return false;
    if ('prompt' in patch) p.prompt = patch.prompt;
    if ('marks' in patch) { p.marks = Math.max(1, Math.min(20, Number(patch.marks) || 1)); q.marks = q.parts.reduce((s, x) => s + x.marks, 0); }
    if ('answer' in patch) Object.assign(p.answer, patch.answer);
    if ('working' in patch) p.working = patch.working;
    if ('ms' in patch) p.ms = patch.ms;
    p.teacherEdited = true; edited(a, qid, `Edited Q${a.questions.indexOf(q) + 1}(${pid})`); return true;
  }
  function updateStem(aid, qid, stem) { const a = A(aid); if (!editable(a)) return false; const q = a.questions.find(x => x.id === qid); if (!q) return false; q.stem = stem; q.teacherEdited = true; edited(a, qid, `Edited Q${a.questions.indexOf(q) + 1} stem`); return true; }
  function regenerate(aid, qid) {
    const a = A(aid); if (!editable(a)) return false; const i = a.questions.findIndex(x => x.id === qid); if (i < 0) return false;
    a.questions[i] = buildQ(a.questions[i].gen, a.questions[i].challenge, a.type === 'Homework'); edited(a, qid, `Regenerated Q${i + 1} with new numbers`); return true;
  }
  function removeQ(aid, qid) { const a = A(aid); if (!editable(a) || a.questions.length < 2) return false; a.questions = a.questions.filter(x => x.id !== qid); edited(a, qid, 'Removed a question'); return true; }
  function addQ(aid, skillId) { const a = A(aid); if (!editable(a)) return false; const gens = pickGenerators([skillId], a.paper); if (!gens.length) return false; a.questions.push(buildQ(gens[0], a.rigour === 'challenge', a.type === 'Homework')); if (!a.skills.includes(skillId)) a.skills.push(skillId); edited(a, null, 'Added a question'); return true; }
  function setReviewed(aid, qid, on) { const a = A(aid); if (!editable(a)) return false; if (on) a.reviewed[qid] = new Date().toISOString(); else { delete a.reviewed[qid]; if (a.status === 'approved') { a.status = 'draft'; hist(a, 'Review withdrawn — approval withdrawn'); } } Hub.store.save(); return true; }
  /** Problems that block approval. */
  function problems(a) {
    const out = []; if (!a.title || !a.title.trim()) out.push('The assessment needs a title.');
    a.questions.forEach((q, i) => q.parts.forEach(p => {
      const tag = `Q${i + 1}(${p.id})`, an = p.answer;
      if (!p.prompt || !String(p.prompt).trim()) out.push(`${tag}: the question text is empty.`);
      if (!(p.marks > 0)) out.push(`${tag}: needs at least 1 mark.`);
      if (an.kind === 'num' && !Number.isFinite(an.value)) out.push(`${tag}: the answer key is not a number.`);
      if ((an.kind === 'tuple' || an.kind === 'list') && !(Array.isArray(an.value) && an.value.length && an.value.every(Number.isFinite))) out.push(`${tag}: every answer box needs a number.`);
      if (an.kind === 'mc' && !(an.correct >= 0 && an.correct < an.choices.length)) out.push(`${tag}: choose the correct option.`);
    }));
    const unrev = a.questions.filter(q => !a.reviewed[q.id]).length; if (unrev) out.push(`${unrev} question${unrev > 1 ? 's' : ''} still to review.`);
    return out;
  }
  function approve(aid) { const a = A(aid); if (!a || a.status !== 'draft') return { ok: false, error: 'Only drafts can be approved.' }; const pr = problems(a); if (pr.length) return { ok: false, error: pr[0] }; a.status = 'approved'; a.approvedAt = new Date().toISOString(); a.version++; hist(a, `Approved (version ${a.version})`); Hub.store.log(`Approved “${a.title}”`); Hub.store.save(true); return { ok: true }; }
  function publish(aid, o) {
    const a = A(aid); if (!a || a.status !== 'approved') return { ok: false, error: 'Approve the assessment before publishing.' };
    if (!o.groups || !o.groups.length) return { ok: false, error: 'Choose at least one group.' };
    if (o.groups.some(g => Hub.curriculum.GROUPS[g].course !== a.course)) return { ok: false, error: `This is a ${a.course} assessment: publish it to ${a.course} groups only.` };
    Object.assign(a, { groups: o.groups.slice(), due: o.due || null, uploadRequired: !!o.uploadRequired, release: o.release === 'auto' ? 'auto' : 'hold', minutes: Number(o.minutes) || a.minutes, status: 'published', publishedAt: new Date().toISOString() });
    hist(a, `Published to ${o.groups.map(g => Hub.curriculum.GROUPS[g].label).join(', ')}`); Hub.store.log(`Published “${a.title}”`); Hub.store.save(true); return { ok: true };
  }
  function unpublish(aid) { const a = A(aid); if (!a || a.status !== 'published') return { ok: false }; if (S().attempts.some(t => t.aid === aid)) return { ok: false, error: 'Students have already submitted. Close it instead.' }; a.status = 'approved'; hist(a, 'Unpublished'); Hub.store.save(true); return { ok: true }; }
  function close(aid) { const a = A(aid); if (!a || a.status !== 'published') return { ok: false }; a.status = 'closed'; hist(a, 'Closed to new submissions'); Hub.store.save(true); return { ok: true }; }
  function archive(aid) { const a = A(aid); if (!a) return { ok: false }; a.status = 'archived'; hist(a, 'Archived'); Hub.store.save(true); return { ok: true }; }
  function duplicate(aid, asRetest) {
    const src = A(aid); if (!src) return null;
    const qs = asRetest ? src.questions.map(q => buildQ(q.gen, q.challenge, src.type === 'Homework')) : JSON.parse(JSON.stringify(src.questions)).map(q => Object.assign(q, { id: uid('q') }));
    const a = Object.assign(JSON.parse(JSON.stringify(src)), { id: uid('a'), questions: qs, reviewed: {}, status: 'draft', version: 1, createdAt: new Date().toISOString(), approvedAt: null, publishedAt: null, history: [] });
    if (asRetest) Object.assign(a, { type: 'Retest', title: src.title.replace(/ · [^·]+$/, '') + ' · Retest', retestOf: src.id, cap: 80, uploadRequired: true, release: 'hold' });
    else a.title = src.title + ' (copy)';
    hist(a, asRetest ? `Retest drafted from “${src.title}” with new numbers` : `Duplicated from “${src.title}”`); S().assessments.unshift(a); Hub.store.save(); return a;
  }
  function remove(aid) { const a = A(aid); if (!a || a.status !== 'draft') return false; S().assessments = S().assessments.filter(x => x.id !== aid); Hub.store.save(true); return true; }

  /* ---------- student side ---------- */
  function score(t) { const e = t.final ? t.final.earned : t.auto.earned, m = t.max; const p = pct(e, m); const a = A(t.aid); return { earned: e, max: m, pct: p, capped: a && a.cap && p !== null ? Math.min(p, a.cap) : p }; }
  function attemptsFor(aid, sid) { return S().attempts.filter(t => t.aid === aid && t.sid === sid).sort((x, y) => x.at < y.at ? -1 : 1); }
  /** Published assessments a student can see now. Retests appear only for students below 80 % on the original. */
  function forStudent(sid) {
    const st = Hub.roster.byId(sid); if (!st) return [];
    return S().assessments.filter(a => a.status === 'published' && a.groups.includes(st.group)).filter(a => {
      if (a.type !== 'Retest' || !a.retestOf) return true;
      const orig = attemptsFor(a.retestOf, sid).filter(t => t.status === 'released').pop(); return !!orig && score(orig).pct < 80;
    });
  }
  const progressKey = (sid, aid) => sid + '|' + aid;
  function saveProgress(sid, aid, data) { if (Hub.auth.isPreview()) return; S().progress[progressKey(sid, aid)] = Object.assign({ updatedAt: new Date().toISOString() }, data); Hub.store.save(); }
  const getProgress = (sid, aid) => S().progress[progressKey(sid, aid)] || null;

  /** Mark responses against an assessment-like object {questions}. */
  function autoMark(questions, responses) {
    let earned = 0, max = 0; const parts = {};
    questions.forEach(q => q.parts.forEach(p => { const r = Hub.math.markPart(p, (responses[q.id] || {})[p.id]); parts[q.id + '|' + p.id] = r; max += p.marks; earned += r.earned; }));
    return { earned, max, parts };
  }
  /** Submit. Guarded against double clicks by token; previews return results without saving anything. */
  function submit(aid, sid, data, opts = {}) {
    const a = opts.assessment || A(aid); if (!a) return { ok: false, error: 'This assessment no longer exists.' };
    const preview = Hub.auth.isPreview() || opts.preview;
    const existing = !preview && data.token && S().attempts.find(t => t.token === data.token); if (existing) return { ok: true, attempt: existing, duplicate: true };
    if (!opts.assessment && !preview) {
      if (a.status !== 'published') return { ok: false, error: 'This assessment is not open.' };
      const st = Hub.roster.byId(sid); if (!st || !a.groups.includes(st.group)) return { ok: false, error: 'This assessment is not assigned to your group.' };
      if (attemptsFor(aid, sid).length && a.type !== 'Practice') return { ok: false, error: 'You have already submitted this. Your teacher can allow a retest.' };
      if (a.uploadRequired && !(data.uploads || []).length) return { ok: false, error: 'Upload a photo of your working first (required for this task).' };
      if (a.type === 'Retest' && !data.proof) return { ok: false, error: 'Confirm your proof of studying before starting the retest.' };
    }
    const auto = autoMark(a.questions, data.responses || {});
    const needsTeacher = Object.values(auto.parts).some(r => r.verdict === 'teacher');
    const t = { id: uid('t'), token: data.token || uid('tok'), aid: a.id, sid, at: new Date().toISOString(), date: Hub.mastery.asOf(), type: a.type, responses: data.responses || {}, uploads: data.uploads || [], reflection: data.reflection || '', proof: !!data.proof,
      auto, max: auto.max, status: a.release === 'auto' && !needsTeacher ? 'released' : 'submitted', final: null, comment: '', hints: data.hints || {} };
    if (preview) return { ok: true, attempt: t, preview: true };
    if (opts.assessment) t.inline = { title: a.title, type: a.type, questions: a.questions, course: a.course }; // Do Now / practice keep their questions
    S().attempts.push(t);
    delete S().progress[progressKey(sid, a.id)];
    if (t.status === 'released') { t.final = { earned: auto.earned, parts: Object.fromEntries(Object.entries(auto.parts).map(([k, r]) => [k, r.earned])) }; t.releasedAt = t.at; writeEvidence(t, a); }
    Hub.store.save(true); return { ok: true, attempt: t };
  }
  function questionsOf(t) { return t.inline ? t.inline.questions : (A(t.aid) || { questions: [] }).questions; }
  function writeEvidence(t, a) {
    // Earlier released attempts at the same assessment (or its original, for a retest) are superseded.
    const related = new Set([t.aid, a.retestOf].filter(Boolean));
    S().attempts.filter(x => x !== t && x.sid === t.sid && related.has(x.aid) && x.status === 'released').forEach(x => S().evidence.forEach(e => { if (e.attemptId === x.id) e.superseded = true; }));
    S().evidence = S().evidence.filter(e => e.attemptId !== t.id);
    questionsOf(t).forEach(q => {
      let earned = 0, max = 0; const tags = [];
      q.parts.forEach(p => { const k = q.id + '|' + p.id, r = t.auto.parts[k]; if (r.verdict === 'teacher' && (!t.final || t.final.parts[k] === undefined)) return; earned += t.final ? t.final.parts[k] ?? r.earned : r.earned; max += p.marks; if (r.tag) tags.push(r.tag); });
      if (max > 0) S().evidence.push({ id: uid('e'), sid: t.sid, skill: q.skill, earned, max, date: t.date, source: a.type, attemptId: t.id, tags, preview: !!q.preview, hinted: Object.keys(t.hints || {}).some(k => k.startsWith(q.id)) });
    });
  }
  /** Teacher confirms marks (per part) and releases results + feedback to the student. */
  function release(attemptId, partMarks, comment) {
    const t = S().attempts.find(x => x.id === attemptId); if (!t) return { ok: false };
    const a = A(t.aid) || { type: t.type, questions: questionsOf(t) }; const parts = {}; let earned = 0;
    questionsOf(t).forEach(q => q.parts.forEach(p => { const k = q.id + '|' + p.id; const v = partMarks && partMarks[k] !== undefined ? Math.max(0, Math.min(p.marks, Number(partMarks[k]) || 0)) : t.auto.parts[k].earned; parts[k] = v; earned += v; }));
    t.final = { earned, parts }; t.comment = comment || ''; t.status = 'released'; t.releasedAt = new Date().toISOString(); t.markedBy = Hub.auth.who();
    writeEvidence(t, a); Hub.store.log(`Released marks for ${Hub.roster.byId(t.sid)?.name || t.sid}`); Hub.store.save(true); return { ok: true };
  }
  /** Release every waiting attempt that has no teacher-only parts (and has its upload if required). */
  function releaseAuto(aid) {
    const a = A(aid); let n = 0;
    S().attempts.filter(t => t.aid === aid && t.status === 'submitted').forEach(t => { const open = Object.values(t.auto.parts).some(r => r.verdict === 'teacher'); if (!open && (!a.uploadRequired || t.uploads.length)) { release(t.id, null, ''); n++; } });
    return n;
  }
  function queue() { return S().attempts.filter(t => t.status === 'submitted' && !t.inline).sort((x, y) => x.at < y.at ? -1 : 1); }

  /* ---------- analysis & gradebook ---------- */
  function itemAnalysis(aid) {
    const a = A(aid), ts = S().attempts.filter(t => t.aid === aid); if (!a) return [];
    return a.questions.flatMap((q, qi) => q.parts.map(p => {
      const k = q.id + '|' + p.id, rs = ts.map(t => ({ t, r: t.auto.parts[k], fin: t.final ? t.final.parts[k] : undefined })).filter(x => x.r);
      const marks = rs.map(x => x.fin ?? x.r.earned), full = marks.filter(m => m >= p.marks).length;
      const wrong = {}; rs.filter(x => x.r.verdict !== 'correct').forEach(x => { const raw = (x.t.responses[q.id] || {})[p.id]; const key = Array.isArray(raw) ? raw.join(' ; ') : raw === undefined || raw === '' ? '(blank)' : p.answer.kind === 'mc' ? 'option ' + 'ABCD'[raw] : String(raw); wrong[key] = (wrong[key] || 0) + 1; });
      const tags = {}; rs.forEach(x => { if (x.r.tag) tags[x.r.tag] = (tags[x.r.tag] || 0) + 1; });
      return { label: `Q${qi + 1}(${p.id})`, skill: q.skill, marks: p.marks, n: rs.length, mean: rs.length ? Math.round(100 * marks.reduce((s, m) => s + m, 0) / (rs.length * p.marks)) : null, full: rs.length ? Math.round(100 * full / rs.length) : null, wrong: Object.entries(wrong).sort((x, y) => y[1] - x[1]).slice(0, 3), tags: Object.entries(tags).sort((x, y) => y[1] - x[1]) };
    }));
  }
  function gradebookCSV(aid) {
    const a = A(aid); const head = ['Student', 'Email', 'Group', 'Status', 'Submitted'];
    const keys = a.questions.flatMap((q, i) => q.parts.map(p => ({ k: q.id + '|' + p.id, h: `Q${i + 1}${p.id} /${p.marks}` })));
    const rows = [head.concat(keys.map(x => x.h), ['Total', 'Max', '%', a.cap ? `Retest % (capped at ${a.cap})` : 'Gradebook %', 'Misconceptions', 'Teacher comment'])];
    Hub.roster.all().filter(s => a.groups.includes(s.group)).forEach(s => {
      const t = attemptsFor(aid, s.id).pop();
      if (!t) { rows.push([s.name, s.email, Hub.curriculum.GROUPS[s.group].label, 'Not submitted', '']); return; }
      const sc = score(t), tags = Object.values(t.auto.parts).map(r => r.tag).filter(Boolean).map(Hub.mastery.tagText);
      rows.push([s.name, s.email, Hub.curriculum.GROUPS[s.group].label, t.status === 'released' ? 'Released' : 'Awaiting marking', t.at.slice(0, 16).replace('T', ' ')].concat(keys.map(x => t.final ? t.final.parts[x.k] : t.auto.parts[x.k].earned), [sc.earned, sc.max, sc.pct, sc.capped, tags.join('; '), t.comment || '']));
    });
    return toCSV(rows);
  }
  Hub.assess = { TYPES, createDraft, updatePart, updateStem, regenerate, removeQ, addQ, setReviewed, problems, approve, publish, unpublish, close, archive, duplicate, remove, forStudent, attemptsFor, saveProgress, getProgress, submit, autoMark, release, releaseAuto, queue, itemAnalysis, gradebookCSV, score, questionsOf, toMC, valueTex, buildQ, byId: A };
})(window.Hub = window.Hub || {});

/* Personalised Do Now — four questions plus an extension, chosen per student from accumulated evidence and the
   group's pacing calendar. Every choice carries a plain-English reason. Students only see a Do Now after
   Miss Badmus approves it for that lesson; editing a student's plan withdraws the approval.
     1 · Repair       lowest-mastery taught skill with enough evidence
     2 · Retrieve     longest-unseen taught skill (spaced retrieval), or a skill with too little evidence
     3 · Prerequisite weakest prerequisite of the next lesson
     4 · Bridge       a first look at the next lesson (preview: never counts against mastery if not yet taught)
     ★ · Extension    challenge-level question (harder parameters / HL stretch) */
(function (Hub) {
  'use strict';
  const C = () => Hub.curriculum, M = () => Hub.mastery, S = () => Hub.store.state;
  const SLOTS = [['repair', 'Repair'], ['retrieve', 'Retrieve'], ['prereq', 'Prerequisite'], ['bridge', 'Bridge'], ['extension', 'Extension']];

  /** One short, standalone part from a skill's generator (no "hence"/dependent parts, no teacher-only parts). */
  function single(skillId, seed, challenge) {
    const sk = C().SKILL[skillId]; if (!sk) return null;
    const gen = sk.gens[seed % sk.gens.length], q = Hub.qcore.build(gen, seed, { challenge });
    const cands = q.parts.filter(p => p.answer.kind !== 'open' && !p.dep);
    const short = cands.filter(p => p.marks <= 3); const pool = short.length ? short : cands;
    // an extension takes the most demanding standalone part; other slots take a short one
    const part = challenge ? cands.slice().sort((a, b) => b.marks - a.marks)[0] : pool[seed % pool.length] || cands[0]; if (!part) return null;
    return Object.assign({}, q, { parts: [Object.assign({}, part, { label: 'a', id: 'a' })], marks: part.marks });
  }
  function fmtReason(st, name) {
    if (!st) return '';
    const ev = st.marks ? `${st.pct}% from ${st.marks} marks of evidence` : 'no evidence yet';
    return `${name}: ${ev}${st.last ? `, last seen ${Hub.core.fmtDate(st.last)}` : ''}`;
  }
  /** Build the plan for one student for the group's next lesson. */
  function planFor(sid, groupId, asOf) {
    const g = C().GROUPS[groupId], lesson = C().nextLesson(groupId, asOf), skills = C().skillsFor(g.course);
    const taught = skills.filter(s => C().isTaught(s.id, groupId, asOf));
    const stats = Object.fromEntries(taught.map(s => [s.id, M().stat(sid, s.id)]));
    const used = new Set(), items = [];
    const seedBase = Hub.core.hashStr(sid + '|' + (lesson ? lesson.date : asOf));
    const add = (slot, skillId, reason, opt = {}) => { if (!skillId) return; used.add(skillId); items.push({ slot, skill: skillId, reason, preview: !!opt.preview, challenge: !!opt.challenge, seed: (seedBase + items.length * 7919) % 900000 + 1 }); };
    const nextSkills = lesson ? lesson.skills : [], bridgeSkill = nextSkills[0];
    const solid = taught.filter(s => !['no-evidence', 'low-evidence'].includes(stats[s.id].status) && (s.id !== bridgeSkill || taught.length < 4));
    // 1 Repair
    const repair = solid.slice().sort((a, b) => stats[a.id].pct - stats[b.id].pct || (stats[a.id].last || '').localeCompare(stats[b.id].last || ''))[0];
    if (repair) add('repair', repair.id, `Lowest secure-evidence skill — ${fmtReason(stats[repair.id], repair.name)}.`);
    // 2 Retrieve: a skill with too little evidence first, else the longest-unseen skill not yet secure (then any)
    const thin = taught.filter(s => !used.has(s.id) && s.id !== bridgeSkill && ['no-evidence', 'low-evidence'].includes(stats[s.id].status));
    if (thin.length) add('retrieve', thin[0].id, `Not enough evidence yet on ${thin[0].name} (${stats[thin[0].id].marks} marks) — this check-in tells us where you are.`);
    else {
      const stale = taught.filter(s => !used.has(s.id) && s.id !== bridgeSkill).sort((a, b) => (stats[a.id].last || '').localeCompare(stats[b.id].last || '') || (stats[a.id].pct ?? 0) - (stats[b.id].pct ?? 0));
      const pick = stale.find(s => stats[s.id].status !== 'secure') || stale[0];
      if (pick) add('retrieve', pick.id, `Spaced retrieval — ${fmtReason(stats[pick.id], pick.name)}${stats[pick.id].last ? ` (${Hub.core.daysBetween(stats[pick.id].last, asOf)} days ago)` : ''}.`);
    }
    // 3 Prerequisite for the next lesson
    const pre = [...new Set(nextSkills.flatMap(id => (C().SKILL[id] || { prereq: [] }).prereq))].filter(id => stats[id] && !used.has(id) && id !== bridgeSkill);
    const preSorted = pre.sort((a, b) => (stats[a].pct ?? 0) - (stats[b].pct ?? 0));
    if (preSorted.length) add('prereq', preSorted[0], `Needed for ${lesson ? Hub.core.fmtDate(lesson.date) : 'next lesson'} (${nextSkills.map(id => C().SKILL[id].name).join(', ')}) — ${fmtReason(stats[preSorted[0]], C().SKILL[preSorted[0]].name)}.`);
    else { const recent = taught.filter(s => !used.has(s.id) && s.id !== bridgeSkill).sort((a, b) => (C().taughtDate(b.id, groupId) || '').localeCompare(C().taughtDate(a.id, groupId) || ''))[0]; if (recent) add('prereq', recent.id, `Most recent lesson, to connect to ${lesson ? Hub.core.fmtDate(lesson.date) : 'next lesson'} — ${fmtReason(stats[recent.id], recent.name)}.`); }
    // 4 Bridge into the next lesson
    const bridge = nextSkills.find(id => !used.has(id)) || nextSkills[0];
    if (bridge) { const newSkill = !C().isTaught(bridge, groupId, asOf); add('bridge', bridge, newSkill ? `First look at ${lesson ? Hub.core.fmtDate(lesson.date) : 'next lesson'}: ${C().SKILL[bridge].name}. Preview only — it does not count against you.` : `Continues in ${lesson ? Hub.core.fmtDate(lesson.date) : 'the next lesson'}: ${fmtReason(stats[bridge], C().SKILL[bridge].name)}.`, { preview: newSkill }); }
    else if (lesson && lesson.kind === 'test') { const t = taught.filter(s => !used.has(s.id))[0]; if (t) add('bridge', t.id, `Test preparation for ${Hub.core.fmtDate(lesson.date)}.`); }
    // ★ Extension: stretch on the strongest recent skill, or the repair skill if nothing is secure
    const secure = solid.filter(s => stats[s.id].status === 'secure').sort((a, b) => (C().taughtDate(b.id, groupId) || '').localeCompare(C().taughtDate(a.id, groupId) || ''));
    const strong = secure.find(s => !used.has(s.id)) || secure[0];
    const best = solid.slice().sort((a, b) => stats[b.id].pct - stats[a.id].pct);
    const ext = strong || best.find(s => !used.has(s.id)) || best[0] || taught[0];
    if (ext) { used.delete(ext.id); add('extension', ext.id, strong ? `Extension — challenge version of a secure skill (${stats[ext.id].pct}%).` : `Extension — challenge version of your strongest skill so far, ${ext.name} (${stats[ext.id].pct ?? '—'}%).`, { challenge: true }); }
    // Not enough taught content yet (start of course): fill with the next lesson's skills as previews
    while (items.length < 5 && nextSkills.length) add(items.length === 4 ? 'extension' : 'bridge', nextSkills[items.length % nextSkills.length], 'Preview of the next lesson.', { preview: true, challenge: items.length === 4 });
    return { sid, lesson, items };
  }
  function planGroup(groupId, asOf) { return Hub.roster.inGroup(groupId).map(s => planFor(s.id, groupId, asOf)); }
  /** Freeze questions for the plan and store it as a draft awaiting approval. */
  function draft(groupId) {
    const asOf = M().asOf(), plans = planGroup(groupId, asOf); const lesson = plans[0] && plans[0].lesson;
    const rec = { groupId, lessonDate: lesson ? lesson.date : asOf, lessonTitle: lesson ? lesson.activity : '', status: 'draft', createdAt: new Date().toISOString(), plans: {} };
    plans.forEach(p => { rec.plans[p.sid] = p.items.map(it => Object.assign({}, it, { question: freeze(single(it.skill, it.seed, it.challenge), it) })); });
    S().donow[groupId] = rec; Hub.store.log(`Drafted personalised Do Now for ${C().GROUPS[groupId].label} (${Hub.core.fmtDate(rec.lessonDate)})`); Hub.store.save(); return rec;
  }
  function freeze(q, it) { if (!q) return null; q.preview = !!it.preview; q.slot = it.slot; return q; }
  function swap(groupId, sid, index, skillId) {
    const rec = S().donow[groupId]; if (!rec || !rec.plans[sid]) return false;
    const it = rec.plans[sid][index], seed = Math.floor(Math.random() * 9e5) + 1, preview = !C().isTaught(skillId, groupId, M().asOf());
    Object.assign(it, { skill: skillId, seed, preview, reason: 'Chosen by Miss Badmus.', question: freeze(single(skillId, seed, it.challenge), { preview, slot: it.slot }) });
    if (rec.status !== 'draft') { rec.status = 'draft'; rec.withdrawn = new Date().toISOString(); }
    Hub.store.save(); return true;
  }
  function approve(groupId) { const rec = S().donow[groupId]; if (!rec) return false; rec.status = 'published'; rec.approvedAt = new Date().toISOString(); Hub.store.log(`Approved and published Do Now for ${C().GROUPS[groupId].label}`); Hub.store.save(true); return true; }
  function withdraw(groupId) { const rec = S().donow[groupId]; if (!rec) return false; rec.status = 'draft'; Hub.store.save(true); return true; }
  /** What a student sees: their frozen questions, only when published. */
  function forStudent(sid) {
    const st = Hub.roster.byId(sid); if (!st) return null; const rec = S().donow[st.group];
    if (!rec || rec.status !== 'published' || !rec.plans[sid]) return null;
    const done = S().attempts.find(t => t.type === 'Do Now' && t.sid === sid && t.donowKey === st.group + '|' + rec.lessonDate);
    return { rec, items: rec.plans[sid], done, assessment: { id: 'donow-' + st.group + '-' + rec.lessonDate, title: `Do Now · ${Hub.core.fmtDate(rec.lessonDate)}`, type: 'Do Now', course: st.course, release: 'auto', questions: rec.plans[sid].map(it => it.question).filter(Boolean) } };
  }
  function submit(sid, responses, token) {
    const d = forStudent(sid); if (!d) return { ok: false, error: 'No Do Now is open.' }; if (d.done) return { ok: true, attempt: d.done, duplicate: true };
    const r = Hub.assess.submit(d.assessment.id, sid, { responses, token }, { assessment: d.assessment });
    if (r.ok && !r.preview) { r.attempt.donowKey = Hub.roster.byId(sid).group + '|' + d.rec.lessonDate; Hub.store.save(true); }
    return r;
  }
  Hub.donow = { SLOTS, single, planFor, planGroup, draft, swap, approve, withdraw, forStudent, submit };
})(window.Hub = window.Hub || {});

return window.Hub;
}
